var btn = $(".btn");
var closeBtn = $(".btn-close");
var btnSub = $(".btn-sub");
var errCustom = $(".err-custom");

// Campos do formulário
var nome = $("#nome");
var nomeValor = nome.val();
var descricao = $("#descricao");

btn.click(()=>{
   $(".modal").toggleClass("show")
})

closeBtn.click(()=>{
    $(".modal").removeClass("show")
 })

 btnSub.click((e)=>{
  e.preventDefault();
 })

 
 $("#contato").change(function(){

    var selectedValue = $(this).val();

     descricao.keydown(function(){

    var descricaoValor = $(this).val();

    
    if (selectedValue === 'Link' || 'Link Externo') {
        try {
            let url = new URL(descricaoValor)
            errCustom.html("<span>foi aceita a url</span>")
          } catch(err) {
            errCustom.html("<span>Não foi aceita a url</span>")
          }
    }

    if (selectedValue === 'Email') {
        var patternsEmail = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;
        var rxgEmail = new RegExp(patternsEmail);
        if(rxgEmail.test(descricaoValor)){
           errCustom.html("<span>chamou correto email</span>")
        }else{
            errCustom.html("<span>chamou erra do email</span>")
        }
    }

    if (selectedValue ===  'Endereço'){
        var patternsEndereco = /([\w\W]+)\s(\d+)/g;
        var rxgEndereco = new RegExp(patternsEndereco);
        if(rxgEndereco.test(descricaoValor)){
            errCustom.html("<span>chamou correto o endereço</span>")
        }else{
            errCustom.html("<span>chamou errado o endereço</span>")
        }
    }


    if (selectedValue ===  'Telefone'){
        $(document).ready(function(){
            descricao.mask("(00) 0000-0000")
         })
        var patternsTel = /(\(\d{2}\)\s?)?\d{4,5}-\d{3}/g;
        var rxgTel = new RegExp(patternsTel);
        if(rxgTel.test(descricaoValor)){
            errCustom.html("<span>chamou correto o telefone</span>")
        }else{
            errCustom.html("<span>chamou errado o telefone</span>")
        }
    }

    if (selectedValue ===  'Horário'){
        var patternsHorario = /(:|\d{2})/g;
        var rxgHorario = new RegExp(patternsHorario);
        if(rxgHorario.test(descricaoValor)){
            errCustom.html("<span>chamou correto o horário</span>")
        }else{
            errCustom.html("<span>chamou errado o horário</span>")
        }
    }
    
    
    if (selectedValue ===  'Responsavel'){
        var patternsResponsavel = /([a-z]|[A-Z])/g;
        var rxgResponsavel = new RegExp(patternsResponsavel);
        if(rxgResponsavel.test(descricaoValor)){
            errCustom.html("<span>chamou correto o responsável</span>")
        }else{
            errCustom.html("<span>chamou errado o responsável</span>")
        }
    }

 })
});








