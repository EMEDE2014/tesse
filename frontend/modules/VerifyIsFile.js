export default class ValidFiles{
    constructor(formFiles){
        this.form = document.querySelector(formFiles);
    }
    init(){
        this.event();
    }
    event(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
        this.valida(e)
        });
    }
    valida(e){
        e.preventDefault();
        let valid = false;
       const el = e.target;
       const inputFile = el.querySelector('input[type="file"]');
     
       const filePath = inputFile.value;
 
        // Allowing file type
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        const filesPermi =  confirm('This image your that select??');
     
        if (!allowedExtensions.exec(filePath)) {
       alert('Invalid file type and cannot empty field. Please select your image');
       inputFile.value = '';
        valid;
   } else if(filesPermi){
     this.form.submit();
    return valid = true
   }
    }

}