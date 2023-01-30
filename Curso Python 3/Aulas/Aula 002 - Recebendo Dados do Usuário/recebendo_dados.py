#Entrada de Dados
'''
print('Qual é o seu nome?')
nome = input().title()
'''

nome = input('Qual é o seu nome? ').title()

#processamento

#saída de Dados
print('Seja bem-vindo(a) %s' % nome)
print('Seja bem-vindo(a) %s' % (nome))
print('Seja bem-vindo(a) {0}'.format(nome))
print(f'Seja bem-vindo(a) {nome}')
