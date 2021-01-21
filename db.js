//db.js
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:localhost:3306/crudecommerce");
    console.log('conectou no MySQL');
    global.connection = connection;
    return connection;
}
connect();

async function selectProduto(){
    const conn = await connect();
    const [rows] = await conn.query('select * from tb_produto');
    return rows;
}

async function insertProduto(produto){
    const conn = await connect();
    const sql = 'INSERT INTO produto( nm_produto, dc_descricao, pc_preco, im_imagem) VALUES (?,?,?,?,?);';
    const values = [produto.nm_produto, produto.dc_descricao, produto.pc_preco, produto.im_imagem];
    return await conn.query(sql, values);
}

async function updateProduto(id, produto){
    const conn = await connect();
    const sql = 'UPDATE tb_produto SET nm_produto=?, dc_descricao=?, pc_preco=?, im_imagem=? WHERE id=? ';
    const values = [produto.nm_produto, produto.dc_descricao, produto.pc_preco, produto.im_imagem, produto.id ];
    return await conn.query(sql, values);
}

async function deleteProduto(id){
    const conn = await connect();
    const sql = 'DELETE FROM tb_produto WHERE id=?;';
    return await conn.query(sql, id);
}


module.exports = {selectProduto, insertProduto, updateProduto}

