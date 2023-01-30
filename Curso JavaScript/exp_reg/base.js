const texto = 'João e Maria testando. Hello World. Joooooooooooooãoooooooooooooooooooooo    . Olha o joão.'

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Meu gatinho.JPeeeeeEEEEEEEEEEeeeeeeeeeeeeEEEEEEEEEEEEEEEEEG',
    'Marido.png',
    'lista de compras.txt'
]

const cpfs = `
    Os CPFs são:
        254.224.877-45  215.978.456-12 047.258.369-96


        963.987.321-00
`

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`

const ips = `
    Os Ips são:
        0.0.0.0

        192.168.0.25

            10.10.5.12

        255.255.255.255
`

const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>'
const html2 = `<p>Olá mundo</p> <p
data-teste="teste" class="teste teste">
Olá de novo</p> <div>Sou a div</div>`

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz @! 0123456789 !'

const lookahead = `
ONLINE 192.168.0.1 ABCDEF inactive
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
OFFLINE 192.168.0.4 ABCDEF inactive
`

module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips,
    cpfs2,
    html2,
    lookahead
}