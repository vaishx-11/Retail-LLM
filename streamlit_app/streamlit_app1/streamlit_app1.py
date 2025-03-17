import streamlit as st
from cassandra.cluster import Cluster
from cassandra.io.asyncorereactor import AsyncoreConnection
import os
from getpass import getpass
from datasets import load_dataset
from langchain_astradb import AstraDBVectorStore
from langchain.embeddings import OpenAIEmbeddings
from langchain.schema import Document
from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough


st.title("Financial Data Query App")    


os.environ["ASTRA_DB_API_ENDPOINT"] = "https://09ca6820-98c6-4323-8fc9-027882b78b92-us-east-2.apps.astra.datastax.com"
os.environ["ASTRA_DB_APPLICATION_TOKEN"] = "AstraCS:qWPOLaUdNGEUlqFCeExOYYPC:859aca1597224d735b3c054b879c9e1190429177b6cf3418e78bd4ee246e599d"
os.environ["OPENAI_API_KEY"] = ""


assert os.getenv("ASTRA_DB_API_ENDPOINT") is not None, "Astra DB API endpoint is not set."
assert os.getenv("ASTRA_DB_APPLICATION_TOKEN") is not None, "Astra DB application token is not set."
assert os.getenv("OPENAI_API_KEY") is not None, "OpenAI API key is not set."


embedding = OpenAIEmbeddings()
vstore = AstraDBVectorStore(
    collection_name="retail",
    embedding=embedding,
    token=os.getenv("ASTRA_DB_APPLICATION_TOKEN"),
    api_endpoint=os.getenv("ASTRA_DB_API_ENDPOINT")
)


philo_dataset = load_dataset("dineshjulakanti/retail")["train"]


prompt_template = """
Answer the question based only on the supplied context. If you don't know the answer, say you don't know the answer.
Context: {context}
Question: {question}
Your answer:
"""
prompt = ChatPromptTemplate.from_template(prompt_template)
model = ChatOpenAI()

chain = (
    {"context": vstore.as_retriever(search_kwargs={"k": 3}), "question": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)


user_query = st.text_input("Enter your query:", "In the given context, what is the most Profit value and provide me the Date?")
if st.button("Submit"):
    result = chain.invoke(user_query)
    st.write(result)


if st.checkbox('Show example entry from dataset'):
    st.write(philo_dataset[16])
