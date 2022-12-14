export enum RequestIds {
  'applanga.all' = 'applanga.all',
  'applanga.byGroup' = 'applanga.byGroup',

  'auth.login' = 'auth.login',
  'auth.logout' = 'auth.logout',
  'auth.refresh' = 'auth.refresh',
  'auth.publicToken' = 'auth.publicToken',
  'auth.passwordlessLoginFinish' = 'auth.passwordlessLoginFinish',

  'bob.alerts' = 'bob.alerts',

  'calculate.calculatePrices' = 'calculate.calculatePrices',

  'cart.byId' = 'cart.byId',
  'cart.mutateEGiftCartItems' = 'cart.mutateEGiftCartItems',
  'cart.mutateCartItems' = 'cart.mutateCartItems',
  'cart.updateCartVoucher' = 'cart.updateCartVoucher',

  'community-discount.status' = 'community-discount.status',
  'community-discount.validate' = 'community-discount.validate',
  'community-discount.voucher' = 'community-discount.voucher',

  'contentful.headerEntries' = 'contentful.headerEntries',
  'contentful.footerEntries' = 'contentful.footerEntries',
  'contentful.whitelabel' = 'contentful.whitelabel',
  'contentful.entries' = 'contentful.entries',

  'customer-activity.activities' = 'customer-activity.activities',
  'customer.info' = 'customer.info',
  'customer.orders' = 'customer.orders',
  'customer.subscriptions' = 'customer.subscriptions',
  'customer.deliveries' = 'customer.deliveries',
  'customer.addresses' = 'customer.addresses',
  'customer.signup' = 'customer.signup',
  'customer.payment-details' = 'customer.payment-details',
  'customer.all-payment-details' = 'customer.all-payment-details',

  'customer-complaints' = 'customer-complaints',
  'customer-complaints.eligible' = 'customer-complaints.eligible',
  'customer-complaints.deliveries' = 'customer-complaints.deliveries',
  'customer-complaints.complaint' = 'customer-complaints.complaint',
  'customer-complaints.error-categories' = 'customer-complaints.error-categories',

  'delivery-options.byPostcode' = 'delivery-options.byPostcode',

  'egifts.productFamilies' = 'egifts.productFamilies',

  'email.status' = 'email.status',

  'experimentation.attributes' = 'experimentation.attributes',
  'experimentation.profile' = 'experimentation.profile',
  'experimentation.mutateProfile' = 'experimentation.mutateProfile',
  'experimentation.datafile' = 'experimentation.datafile',

  'hellocare.is-internal' = 'hellocare.is-internal',

  'communication-preferences.silos' = 'communication-preferences.silos',
  'communication-preferences.channels' = 'communication-preferences.channels',
  'communication-preferences.channelSubscribe' = 'communication-preferences.channelSubscribe',
  'communication-preferences.channelUnsubscribe' = 'communication-preferences.channelUnsubscribe',
  'communication-preferences.siloSubscribe' = 'communication-preferences.siloSubscribe',
  'communication-preferences.subscribe' = 'communication-preferences.subscribe',
  'communication-preferences.unsubscribe' = 'communication-preferences.unsubscribe',
  'communication-preferences.unsubscribeAll' = 'communication-preferences.unsubscribeAll',
  'communication-preferences.notificationInfo' = 'communication-preferences.notificationInfo',

  'loyalty-challenge.challenge-info' = 'loyalty-challenge.challenge-info',
  'loyalty-challenge.claim-reward' = 'loyalty-challenge.claim-reward',
  'loyalty-challenge.onboarding' = 'loyalty-challenge.onboarding',
  'loyalty-challenge.onboarding-patch' = 'loyalty-challenge.onboarding-patch',

  'menu.byWeek' = 'menu.byWeek',

  'newsletter.subscribe' = 'newsletter.subscribe',
  'newsletter.activate' = 'newsletter.activate',
  'payment.idealIssuers' = 'payment.idealIssuers',
  'payment.paymentMethods' = 'payment.paymentMethods',
  'payment.paymentClientKeys' = 'payment.paymentClientKeys',
  'payment.paymentChange' = 'payment.paymentChange',
  'payment.paymentNewClientKeys' = 'payment.paymentNewClientKeys',

  'payments-status.paymentsChangeStatus' = 'payments-status.paymentsChangeStatus',

  'payments-verification.adyenDetails' = 'payments-verification.adyenDetails',

  'partners.verifyMembership' = 'partners.verifyMembership',

  'plans-config.all' = 'plans-config.all',

  'presets.all' = 'presets.all',

  'price-presentation.discountCommunication' = 'price-presentation.discountCommunication',

  'products.productInfo' = 'products.productInfo',
  'products.productFamiliesByHandle' = 'products.productFamiliesByHandle',
  'products.products' = 'products.products',

  'recipe.all' = 'recipe.all',
  'recipe.byId' = 'recipe.byId',
  'recipe.byIds' = 'recipe.byIds',
  'recipe.search' = 'recipe.search',
  'recipe.search.infiniteScroll' = 'recipe.search.infiniteScroll',
  'recipe.suggestions' = 'recipe.suggestions',
  'recipe.favorites.infiniteScroll' = 'recipe.favorites.infiniteScroll',
  'recipe.favorites.all' = 'recipe.favorites.all',

  'referrals.freebies.count' = 'referrals.freebies.count',
  'referrals.helloshareHistory' = 'referrals.helloshareHistory',
  'referrals.freebiesHistory' = 'referrals.freebiesHistory',
  'referrals.customerCredit' = 'referrals.customerCredit',
  'referrals.creditConfiguration' = 'referrals.creditConfiguration',
  'referrals.configurations' = 'referrals.configurations',
  'referrals.challengeConfiguration' = 'referrals.challengeConfiguration',
  'referrals.resendFreebie' = 'referrals.resendFreebie',
  'referrals.resendHelloShare' = 'referrals.resendHelloShare',
  'referrals.sendFreebieInvites' = 'referrals.sendFreebieInvites',
  'referrals.sendHelloShareInvites' = 'referrals.sendHelloShareInvites',

  'delivery.regions' = 'delivery.regions',

  'remote-configuration.byProject' = 'remote-configuration.byProject',
  'remote-configuration.locales' = 'remote-configuration.locales',

  'subscriptions.productOptionsBySubscriptionId' = 'subscriptions.productOptionsBySubscriptionId',
  'subscriptions.patchById' = 'subscriptions.patchById',
  'subscriptions.reactivateById' = 'subscriptions.reactivateById',
  'subscriptions.patchDeliveryDate' = 'subscriptions.patchDeliveryDate',

  'voucher.validate' = 'voucher.validate',
  'voucher.info' = 'voucher.info',

  'voucher-services.additional-vouchers' = 'voucher-services.additional-vouchers',

  'recipe.rating.byRecipeId' = 'recipe.rating.byRecipeId',
  'recipe.rating.sendFeedback' = 'recipe.rating.sendFeedback',

  'reactivation-bff.reactivation-subscription' = 'reactivation-bff.reactivation-subscription',

  'cancel-account.submit-request' = 'cancel-account.submit-request',
  'cancel-subscription.submit-request' = 'cancel-subscription.submit-request',
}

export default RequestIds;
