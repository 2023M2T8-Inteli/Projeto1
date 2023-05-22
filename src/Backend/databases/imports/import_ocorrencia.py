import pandas as pd
import sqlite3

dados = pd.read_excel('Pico.xlsx', sheet_name='Sheet1')

connection = sqlite3.connect('Rel1.db')
cursor = connection.cursor()

for index, row in dados.iterrows():
    data_hora = row['Data/Hora']
    lat = row['Latitude']
    lng = row['Longitude']
    trecho = row['Trecho']
    pos = row['Posição(km)']
    pv = row['Placa Virtual']

    cursor.execute("INSERT INTO OCORRENCIA(tipo_oc, tipo_vagao, data_hora, lat, lon, trecho, pos, pv) VALUES(?,?,?,?,?,?,?,?)",
                   ("P","E",data_hora,lat, lng,trecho,pos,pv))
    
connection.commit()
connection.close()

print('inserção concluida')