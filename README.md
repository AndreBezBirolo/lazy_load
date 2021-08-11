# Lazy load

O projeto de lazy load tem como intuito otimiza a sua página web fazendo com que imagens que não estejam no campo de visão do usuário não sejam carregas. Para isso utilizamos uma imagem padrão super otimizado que sobrepõe a imagem original até que o usuário chegue nela.

## 🚀 Começando

O script pode funcionar tanto com *IntersectionObserver* ou com funcionalidades inferiores, porém você nem chegará a ver isso, basta seguir o passo a passo e seu lazy load está configurado.



### 🔧 Passo a Passo


```
1. Adicionar a classe 'lazy' nas imagens que deseja que o lazy seja ativado.
2. O atributo 'src' da sua foto agora deve ser a imagem padrão selecionada por você.
3. O atributo 'data-src' deve conter a url da sua foto original.
4. O atributo 'data-srcset' deve conter a url da foto original x1 e x2.
```
Exemplo de código em HTML:
```
<img class="lazy"
     height="XX"
     width="XX"
     src="seu_loader.jpg"
     data-src="foto_original_1x.jpg"
     data-srcset="foto_original_2x.jpg 2x, foto_original_1x.jpg 1x"
     alt="Texto alternativo">
```


## ⚙️ Testando para ver se está tudo ok!

Para testar se tudo está do jeito correto, basta colocar uma imagem fora do campo de visão da tela, abrir o inspecionar, ir em network e ver se sua imagem está sendo baixada.
Se ela estiver sendo baixada, tem algo errado. 

Obs: única coisa que deve ser baixada é a imagem padrão.

## 📄 Licença

Este projeto está sob a licença (Apache License 2.0) - veja o arquivo [LICENSE.md](https://github.com/AndreBezBirolo/lazy_load/blob/main/LICENSE) para detalhes.

## 🎁 Considerações finais

* Divulgue a ideia e vamos crescer juntos! 📢

---
por [André Bez Birolo](https://github.com/AndreBezBirolo) 
