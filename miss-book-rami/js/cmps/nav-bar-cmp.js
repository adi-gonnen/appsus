import {eventBus, EVENT_SHOW_MSG} from '../services/eventbus-service.js'

export default {
	template: `
		<nav class="nav-bar">
			msg: {{msg}}
			<router-link exact to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/book">Books</router-link>
		</nav>
	`,
	data() {
		return {
			msg : ''
		}
	},
	created() {
		eventBus.$on(EVENT_SHOW_MSG, msg=>{
			this.msg = msg;
		})
	}
}
