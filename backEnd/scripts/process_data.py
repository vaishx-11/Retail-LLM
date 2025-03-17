import pandas as pd
import matplotlib.pyplot as plt
import sys

def process_data(file_path, output_dir):
    data = pd.read_csv(file_path)
    print(data.columns)  # Debug statement to print the columns of the CSV file

    # Check if 'Date' column exists
    if 'Date' in data.columns:
        # Convert 'Date' column to datetime format
        data['Date'] = pd.to_datetime(data['Date'])
    else:
        print("Warning: 'Date' column not found in the CSV file.")
    
    # Data Cleaning: Handling missing values and correcting data types
    data.dropna(inplace=True)

    # Product Availability and Sales Trends
    # Sales trends over time for different product lines
    if 'Branch' in data.columns and 'Total' in data.columns:
        plt.figure(figsize=(12, 6))
        for branch in data['Branch'].unique():
            branch_data = data[data['Branch'] == branch]
            branch_data.groupby('Date').sum(numeric_only=True)['Total'].plot(label=f'Branch {branch}')
        plt.title('Sales Trends Over Time for Different Branches')
        plt.xlabel('Date')
        plt.ylabel('Total Sales')
        plt.legend()
        plt.savefig(f'{output_dir}/sales_trends_over_time.png')
    else:
        print("Warning: 'Branch' or 'Total' columns not found in the CSV file.")
    
    # Sales Performance Analysis
    # Analyzing sales performance by product line
    if 'Product line' in data.columns and 'Total' in data.columns:
        product_performance = data.groupby('Product line').sum(numeric_only=True)['Total'].sort_values(ascending=False)
        plt.figure(figsize=(12, 6))
        product_performance.plot(kind='bar')
        plt.title('Sales Performance by Product Line')
        plt.xlabel('Product Line')
        plt.ylabel('Total Sales')
        plt.savefig(f'{output_dir}/sales_performance_by_product_line.png')
    else:
        print("Warning: 'Product line' or 'Total' columns not found in the CSV file.")
    
    # Customer preferences based on demographics
    if 'Gender' in data.columns and 'Total' in data.columns:
        gender_sales = data.groupby('Gender').sum(numeric_only=True)['Total']
        plt.figure(figsize=(6, 6))
        gender_sales.plot(kind='pie', autopct='%1.1f%%')
        plt.title('Sales Distribution by Gender')
        plt.ylabel('')
        plt.savefig(f'{output_dir}/sales_distribution_by_gender.png')
    else:
        print("Warning: 'Gender' or 'Total' columns not found in the CSV file.")
    
    # Sales performance by payment method
    if 'Payment' in data.columns and 'Total' in data.columns:
        payment_sales = data.groupby('Payment').sum(numeric_only=True)['Total']
        plt.figure(figsize=(12, 6))
        payment_sales.plot(kind='bar')
        plt.title('Sales Performance by Payment Method')
        plt.xlabel('Payment Method')
        plt.ylabel('Total Sales')
        plt.savefig(f'{output_dir}/sales_performance_by_payment_method.png')
    else:
        print("Warning: 'Payment' or 'Total' columns not found in the CSV file.")
    
    # Sales trends for different product lines
    if 'Product line' in data.columns and 'Total' in data.columns:
        product_performance = data.groupby('Product line').sum(numeric_only=True)['Total'].sort_values(ascending=False)
    
        # Plotting sales performance by product line in a pie chart
        plt.figure(figsize=(8, 8))
        product_performance.plot(kind='pie', autopct='%1.1f%%', startangle=140)
        plt.title('Sales Distribution by Product Line')
        plt.ylabel('')
        plt.savefig(f'{output_dir}/sales_distribution_by_product_line.png')
    else:
        print("Warning: 'Product line' or 'Total' columns not found in the CSV file.")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python process_data.py <csv_path> <output_dir>")
        sys.exit(1)
    csv_path = sys.argv[1]
    output_dir = sys.argv[2]
    process_data(csv_path, output_dir)
