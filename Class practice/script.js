class Validate {
    constructor(form){
        this.form = form;
        this.form.addEventListener('submit', (e) => {})
    }
    get form(){
        return _form
    }

    set form(form){
        this._form = form;
    }

    static success_class_name(){
        return 'success'
    }
    static error_class_name(){
        return 'error'
    }
    static error_item_class_name(){
        return 'error_item'
    }
    static form_control_class_name(){
        return 'form-group'
    }
    
    checkformelement(){
    }

    checkForm(){
    }
    errortemplate(element,message){
    }
    clearError(){
    }
    required(element,message){
    }
    validEmail(element,message){
    }
    minlenght(element,message){
    }
}