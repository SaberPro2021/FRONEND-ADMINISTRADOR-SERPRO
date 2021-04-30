import { Component, OnInit, forwardRef, Input, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import Quill from 'quill';



@Component({
  selector: 'serpro-ng-quill',
  templateUrl: './serpro-ng-quill.component.html',
  styleUrls: ['./serpro-ng-quill.component.css'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SerproNgQuillComponent),
            multi: true     
    }   
  ]
})
export class SerproNgQuillComponent implements OnInit, ControlValueAccessor,  AfterViewInit {
  
  @Input ()
  options: any;

  @Input ()
  idEditor: string;
  

  private editorValue: string;

  constructor() { 
    
  }

  ngOnInit(): void {

   
  }
  ngAfterViewInit(): void {
    this.configQuill ();
  }

  configQuill () {

    let opts = {
      debug: 'info',
      modules: {
        toolbar:  [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ],
        imageResize: {}
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow'
    };

    if (this.options) {
      opts = this.options;
    }
    
    
    const editor = new Quill(('#'+this.idEditor), opts);
    let objReference = this;
    editor.on('editor-change', () => objReference.writeValue(editor.root.innerHTML));
  }

  

  onChange: any = () => {}
  onTouch: any = () => {}
  

  set value(val: string){
    console.log('set:',val);
    if( val !== undefined && this.editorValue !== val){
      this.editorValue = val
      this.onChange(val)
      this.onTouch(val)
    }   
  }

  writeValue(value: string){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
 

  
  

}
