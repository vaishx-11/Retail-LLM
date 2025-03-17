import pandas as pd
import numpy as np
import nltk
from nltk.stem.snowball import SnowballStemmer
import streamlit as st
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer


data = pd.read_csv("marketing_sample_for_amazon_com-ecommerce__20200101_20200131__10k_data.csv")

selected_products = data[['Uniq Id', 'Product Name', 'Category', 'About Product', 'Image', 'Product Url']]

def tokenize_stem(text):
    stemmer = SnowballStemmer('english')
    tokens = nltk.word_tokenize(text.lower())
    stemmed = [stemmer.stem(w) for w in tokens]
    return stemmed

selected_products['stemmed'] = selected_products.apply(lambda row: tokenize_stem(str(row['About Product']) + " " + str(row['Product Name'])), axis=1)

Tfid_Vectorize = TfidfVectorizer()

def cosine_sim(text1, text2):
    text1_con = ' '.join(text1)
    text2_con = ' '.join(text2)
    tfidf = Tfid_Vectorize.fit_transform([text1_con, text2_con])
    return cosine_similarity(tfidf[0:1], tfidf[1:2])[0][0]

def search_product(query):
    stemmed_query = tokenize_stem(query)
    selected_products['similarity'] = selected_products['stemmed'].apply(lambda x: cosine_sim(stemmed_query, x))
    res = selected_products.sort_values(by=['similarity'], ascending=False).head(10)[['Product Name', 'Category', 'About Product', 'Image', 'Product Url']]
    return res

query = st.text_input("Enter product name")
submit = st.button('Search')
if submit:
    res = search_product(query)
    recommended_product_name = []
    recommended_product_pic = []
    recommended_product_url = []

    for i in range(10):
        recommended_product_name.append(res.iloc[i]['Product Name'])
        recommended_product_pic.append(res.iloc[i]['Image'])
        recommended_product_url.append(res.iloc[i]['Product Url'])

    cols = st.columns(7)
    for i, col in enumerate(cols):
        if i < len(recommended_product_name):
            with col:
                st.text(recommended_product_name[i])
                st.image(recommended_product_pic[i])
                url = recommended_product_url[i]
                link_text = "Click here to view the product"
                st.markdown(f"[{link_text}]({url})")
