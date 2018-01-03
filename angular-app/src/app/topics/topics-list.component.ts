import  { Component} from '@angular/core'

@Component({
	selector: 'topics-list',
	templateUrl: './topic-list.component.html'
})

export class TopicsListComponent {
	
	handleEventClicked (data) {
		console.log(data)
	}

	topics =[
	{
		id: 1,
		name: 'webMethods CI',
		description: 'Reference documentation and demo setup for a conitinious integration pipeline for a webMethods environment. Used technologies are webMethods IS, Command Central, git, jenkins'
	},
	{
		id: 2,
		name: 'Sonarqube flow plugin',
		description: 'A plugin for the Sonarqube project which enables the static code analysis of webMethods flow code'
	},
	{
		id: 3,
		name: 'CA API Gateway',
		description: 'Using the CA API Gateway as reverse proxy, policy enforcing point, custom security flow implementation and general api management and lifecycle manaament.'
	},
	{
		id: 4,
		name: 'Personal angular app',
		description: 'You are looking at it 😉'
	},
	{	
		id: 5,
		name: 'webMethods & Corda blockchain',
		description: 'demo setup showing a intragtion use case between the Corda blockchain and webMethods integration server'
	}
	]
}