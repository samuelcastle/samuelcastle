import  { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'topic-thumbnail',
	template: `
	<div>
		<h2>{{topic.name}}</h2>
		<div>ID: {{topic.id}}qsdf</div>
		<button mat-raised-button color="accent" (click)="handleClickMe()">Click me!</button>
	</div>
	`
})
export class TopicThumbnailComponent {
	@Input() topic:any
	@Output() eventClick = new EventEmitter()

	handleClickMe() {
		console.log('clicked!')
		this.eventClick.emit(this.topic.name)
	}
}