import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input('name')
  name!: string;

  @Input('external-message')
  set externalMessage(msg: string | undefined) {
    if (msg) {
      this.formGroup.patchValue({ message: msg });
    }
  }
  get externalMessage(): string | undefined {
    return this.formGroup.value.message;
  }

  @Output('send')
  sendEvent: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      message: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit(): void { }

  onSend(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const message = {
      message: this.formGroup.value.message,
      name: this.name
    };

    this.sendEvent.emit(message);
    this.formGroup.reset();
    this.externalMessage = undefined;
  }
}
