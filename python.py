import sqlite3
import pandas as pd
from sqlalchemy import create_engine 

def load_to_db(df, db_name, table_name):

    try:
        engine = create_engine(f'sqlite:///{db_name}')
        df.to_sql(table_name, engine, if_exists='replace', index=False)
        
        print(f" Data successfully loaded to database '{db_name}' in table '{table_name}'")
        
    except Exception as e:
        print(f" Error loading data to database: {e}")
