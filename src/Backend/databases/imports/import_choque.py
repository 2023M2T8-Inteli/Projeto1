import pandas as pd
import sqlite3

id_oc = 65

dados = pd.read_excel('Choque2.xlsx', sheet_name='Sheet1')

connection = sqlite3.connect('Rel1.db')
cursor = connection.cursor()

for index, row in dados.iterrows():
    id_oc+=1
    tipo_choque = 2
    peg_psi = row['PEG(PSI)']
    act = row['ACT(mm)']
    f_max = row['F máxima(tf)']
    vel = row['Velocidade(km/h)']

    cursor.execute("INSERT INTO CHOQUE(ID_OC, tipo_choque, peg_psi, act, f_max, vel) VALUES(?,?,?,?,?,?)",
                   (id_oc,tipo_choque,peg_psi,act,f_max,vel))


connection.commit()
connection.close()

print('inserção concluida')