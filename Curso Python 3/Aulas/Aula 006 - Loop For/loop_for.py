'''
nome = 'Leonardo Santos'
lista = [1, 2, 3, 4, 5]
numeros = range(1, 10)

# Example For 1
for letra in nome:
    print(letra)

# Example For 2
for numero in lista:
    print(numero)


for indice, letra in enumerate(nome):
    print(nome[indice])

nome = 'Leonardo Santos'

for indice, letra in enumerate(nome):
    print(letra)

qtd = int(input('Quantas vezes rodar o loop? '))

multi = 0

for n in range(1, qtd+1):
    print(f'Imprimindo {n}')


nome = 'Leonardo Santos'

for indice, letra in enumerate(nome):
    print(letra, end='')

'''
