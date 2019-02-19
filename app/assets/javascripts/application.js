/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function() {
	window.GOVUKFrontend.initAll()

	$('input').attr('autocomplete', 'off')

	function getStickyItemPosition() {
		try {
			var itemTop = $('.sticky-item').offset().top
			var itemPadding = parseInt(
				$('.sticky-item')
					.css('padding-top')
					.replace('px', '')
			)

			return itemTop + itemPadding
		} catch (error) {
			console.log(error)
			return false
		}
	}

	var stickyItemInitialPosition = getStickyItemPosition()
	$(window).scroll(function() {
		try {
			var browserPosition = $(this).scrollTop()
			//490
			if (browserPosition >= stickyItemInitialPosition) {
				$('.sticky-item').addClass('fix')
			} else {
				$('.sticky-item').removeClass('fix')
			}
		} catch (error) {
			console.log(error)
		}
	})

	$('.govuk-input--pupil, .add-value').on('keyup change', function(e) {
		var total = 0
		$('.govuk-input--pupil, .add-value').each(function(i) {
			total += Number($(this).val())
		})

		$('#pupil-count-header').text(total)
		$('.page-input-total').val(total)
	})

	var total = 0

	$('.govuk-input--pupil, .add-value').each(function(i) {
		total += Number($(this).val())
	})

	$('#pupil-count-header').text(total)
	$('.page-input-total').val(total)
})

function nextPageBasedOnSelection($radioObject) {
	if (nextPageRoutes) {
		for (let index = 0; index < Object.keys(nextPageRoutes).length; index++) {
			var checkboxValue = $radioObject.val()
			if (nextPageRoutes[checkboxValue] != undefined) {
				var nextPageField = null
				if ($('#next-page').length) {
					nextPageField = $('#next-page')
				} else {
					nextPageField = $(
						'<input type="hidden" id="next-page" name="next-page">'
					)
					$('button[type=submit]').before(nextPageField)
				}
				nextPageField.val(nextPageRoutes[checkboxValue])
				console.log(
					'Next page destination has been set as "' +
						nextPageRoutes[checkboxValue] +
						'"'
				)
				break
			} else {
				$('#next-page').remove()
			}
		}
	}
}

$('input[type=radio]').on('change', function() {
	try {
		$('input[type=radio]:checked').each(function() {
			nextPageBasedOnSelection($(this))
		})
	} catch (e) {}
})

$(
	'input:not([type="submit"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])'
).on('input', function() {
	if ($(this).val()) {
		$(this)
			.parent()
			.addClass('hasInputValue')
	} else {
		$(this)
			.parent()
			.removeClass('hasInputValue')
	}
})

$(document).ready(function() {
	$('a').each(function() {
		let dataName = $(this).attr('data-name')
		let dataValue = $(this).attr('data-value')
		if (dataName && dataValue) {
			let stringForUrl = '?' + dataName + '=' + dataValue
			let currentUrl = $(this).attr('href')
			$(this).attr('href', currentUrl + encodeURI(stringForUrl))
		}
	})
	try {
		$('input[type=radio]:checked').each(function() {
			nextPageBasedOnSelection($(this))
		})
	} catch (e) {}
	if ($('input[type=checkbox], input[type=radio]').length) {
		window.addEventListener('pageshow', function(event) {
			var historyTraversal =
				event.persisted ||
				(typeof window.performance != 'undefined' &&
					window.performance.navigation.type === 2)
			if (historyTraversal) {
				// Handle page restore.
				window.location.reload()
			}
		})
	}
})
