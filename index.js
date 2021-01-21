// index.js

const { brotliDecompress } = require('zlib');

(async () => {
    const db = require('/Users/Carla Naiara/Documents/projects/recodePro/projectsNodejs/db');
    console.log('consegui!!');

    console.log('INSERT INTO tb_produto');
    await db.insertProduto({nm_produto:'lava-louça', dc_descricao:'Lava-louças Brastemp Serviços - Branco', pc_preco: 3925.00, im_imagem:"D:\developer\frontend\projetos_carla\ecommerce_recode\imagem\louca_Prata.jpeg"});

    console.log('SELECT * FROM tb_produto;');
    const tb_produto = await db.selectProduto(); 
    console.log(tb_produto);
})();
