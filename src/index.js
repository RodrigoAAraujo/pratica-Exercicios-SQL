import express from 'express';
import connection from './database/db.js';

const app = express()

const question_1 = await connection.query("SELECT * FROM produtos LIMIT 5")

const question_2 = await connection.query("SELECT * FROM clientes LIMIT 3")

const question_3 = await connection.query("SELECT * FROM clientes WHERE nome= $1", ["Televisão 43"])

const question_4 = await connection.query("INSERT INTO produtos (nome, preco) VALUES ($1,$2)", ["Macbook Pro 13", "17000"])

const question_5 = await connection.query("DELETE FROM clientes WHERE nome=$1", ["Orlando Pequeno Jesus"])

const question_6 = await connection.query("UPDATE produtos SET preco=$1 WHERE nome=$2 ", ["80", "Pelúcia Strange Planet com Gatinho"])

const question_7 = await connection.query("UPDATE produtos SET preco=$1 WHERE nome=$2 ", ["9800", "Violão Lava ME 2"])

const question_8 = await connection.query("UPDATE clientes SET cpf=$1 WHERE nome=$2 ", ["04652651298", "Lucca Santarém Branco"])


const question_9_product = await connection.query("SELECT * FROM produtos WHERE nome=$1", ["Violão Lava ME 2"])
const question_9_buyer = await connection.query("SELECT * FROM clientes WHERE nome=$1", ["Chico Buarque de Holanda"])

const question_9 = await connection.query("DELETE FROM compras WHERE id_cliente=$1, id_produto=$2", [question_9_buyer.rows[0].id, question_9_product.rows[0].id])


const question_10_product = await connection.query("SELECT * FROM produtos WHERE nome=$1", ["Celular Topo de Linha"])
const question_10_buyer = await connection.query("SELECT * FROM clientes WHERE nome=$1", ["Olga Cascais Fortunato"])

const question_10 = await connection.query("DELETE FROM compras WHERE id_cliente=$1, id_produto=$2", [question_10_buyer.rows[0].id, question_10_product.rows[0].id])


const question_11_product = await connection.query("SELECT * FROM produtos WHERE nome=$1", ["Fone Topo de Linha"])
const question_11_buyer = await connection.query("SELECT * FROM clientes WHERE nome=$1", ["Martinha Lima Zambujal"])

const question_11 = await connection.query("DELETE FROM compras WHERE id_cliente=$1, id_produto=$2", [question_11_buyer.rows[0].id, question_11_product.rows[0].id])


const question_12 = await connection.query("SELECT * FROM produtos ORDER BY preco")

const question_13 = await connection.query("SELECT * FROM produtos ORDER BY preco LIMIT 3")

const question_14 = await connection.query("SELECT * FROM produtos ORDER BY preco DESC LIMIT 1")

const question_15 = await connection.query("SELECT * FROM produtos ORDER BY preco DESC OFFSET 1 LIMIT 1")


console.log(question_1)