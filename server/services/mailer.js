const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../../config/keys');

class Mailer extends helper.Mail {
	constructor({ subject, recipient }, content) {
		super();
		this.sgApi = sendGrid(keys.sendGridKey);
		this.from_email = new helper.Email('saucyclothing@gmail.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddress(recipient);
		this.addContent(this.body);
		this.addRecipients();
	}
	formatAddresses = (recipient) => {
		return new helper.Email(recipient);
	}
	addClickTracking = () => {
		const trackSettings = new helper.trackSettings();
		const clickTracking = new helper.clickTracking(true, true);

		trackSettings.setClickTracking(clickTracking);
		this.addTrackSettings(trackSettings);
	}
	addRecipients = () => {
		const personalize = new helper.Personalization();
		personalize.addTo(this.recipients);
		this.addPersonalization(personalize);
	}
	async send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});
		const response = await this.sgApi.API(request, (error, response) => {
			if (error) {
				console.log('Error response received');
			}
			console.log(response.statusCode);
			console.log(response.body);
			console.log(response.headers);
			return response;
		});
		return response;
	}
};

module.exports = Mailer;