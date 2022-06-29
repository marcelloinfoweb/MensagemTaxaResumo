define(
    [
        'jquery',
        'ko',
        'uiComponent',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/checkout-data',
        'Magento_Customer/js/customer-data',
        'mage/translate'
    ],
    function ($, ko, Component, quote, checkoutData, customerData, $t) {
        return Component.extend({
            defaults: {
                template: 'Funarbe_MensagemTaxaResumo/sales/checkout/mycustomtext'
            },
            getCustomText() {
                return $t('<div data-role="checkout-messages" class="messages" style="display: block;">' +
                    '    <div class="message message-warning warning">' +
                    '        <div data-ui-id="checkout-cart-validationmessages-message-warning">' +
                    '               O valor da <strong>taxa</strong> não utilizado na compra será estornado.' +
                    '        </div>' +
                    '    </div>' +
                    '</div>');
            }
        });
    }
);
