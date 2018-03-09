const keys = require('../../../config/keys');

module.exports = (order) => {
	return `
		<html>
			<body>
				<div>
					<h3>${order.title}</h3>
					<p>Thank you for your order.
						Here is your order id <span style="font-weight: bold;">${order.orderNumber}</span>
					</p>
					<p>If you have any questions regarding with this order or with anything else, please
						don't hesitate to call us or send an email. Thank you!
					</p>
				</div>
			</body>
		</html>
	`
};