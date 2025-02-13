define([
    'jquery',
    'mage/utils/wrapper',
    'Bss_OneStepCheckout/js/model/payment-service',
    'Magento_Checkout/js/model/totals',
    'Magento_Checkout/js/model/shipping-service',
    'Magento_Checkout/js/model/full-screen-loader'
], function (
    $,
    wrapper,
    paymentService,
    totalsService,
    shippingService,
    fullScreenLoader
) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * Extend handleSuperErrorResponse to hide Bss loaders
             */
            handleSuperErrorResponse: function () {
                this._super();
                paymentService.isLoading(false);
                totalsService.isLoading(false);
                shippingService.isLoading(false);
                fullScreenLoader.stopLoader(true);
            }
        });
    };
});
