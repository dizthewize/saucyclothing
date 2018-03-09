const keys = require('../../../config/keys');

module.exports = (order) => {
	return `
		<html>
			<body>
				<div>
					<h3>${order.title}</h3>
					<p>${order.fullName} Thank you for your order.
						Here is your order id <span style="font-weight: bold;">${order.order.orderNumber}</span>,
						and expected arrival date is <span style="font-weight: bold;">${order.order.arrivalDate}</span>
					</p>
					<p>If you have any questions regarding with this order or with anything else, please
						don't hesitate to send us an email or visit us at saucyclothing.com. Thank you!
					</p>
				</div>
			</body>
		</html>
	`
};