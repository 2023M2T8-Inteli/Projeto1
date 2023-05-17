import pandas as pd
import sqlite3

id_oc = 124
dados = pd.read_excel('Pico.xlsx', sheet_name='Sheet1')

connection = sqlite3.connect('Rel1.db')
cursor = connection.cursor()

for index, row in dados.iterrows():
    id_oc += 1
    vel = row['Velocidade(km/h)']
    engate = row['Engate(tf)']
    delta_t = row['Delta T(s)']
    act = row['ACT(mm)']
    peg_psi = row['PEG(PSI)']

    cursor.execute("INSERT INTO PICO(ID_OC, vel, engate, delta_t, act, peg_psi) VALUES(?,?,?,?,?,?)",
                   (id_oc, vel, engate, delta_t, act, peg_psi))
    
connection.commit()
connection.close()

print('inserção concluida')