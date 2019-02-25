/* global $ */

if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '')
	}
}

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

var newNoteLocation = ''
var handledLocation = ''
var newNoteValue = ''
var customNote = false

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

function Dialog(dialogEl, overlayEl) {
	this.dialogEl = dialogEl
	this.overlayEl = overlayEl
	this.focusedElBeforeOpen

	var focusableEls = this.dialogEl.querySelectorAll(
		'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
	)
	this.focusableEls = Array.prototype.slice.call(focusableEls)

	this.firstFocusableEl = this.focusableEls[0]
	this.lastFocusableEl = this.focusableEls[this.focusableEls.length - 1]

	this.close() // Reset
}

Dialog.prototype.open = function() {
	var Dialog = this

	this.dialogEl.removeAttribute('aria-hidden')
	this.overlayEl.removeAttribute('aria-hidden')

	this.focusedElBeforeOpen = document.activeElement

	this.dialogEl.addEventListener('keydown', function(e) {
		Dialog._handleKeyDown(e)
	})

	this.overlayEl.addEventListener('click', function() {
		Dialog.close()
	})

	this.firstFocusableEl.focus()
}

Dialog.prototype.close = function() {
	this.dialogEl.setAttribute('aria-hidden', true)
	this.overlayEl.setAttribute('aria-hidden', true)

	if (this.focusedElBeforeOpen) {
		this.focusedElBeforeOpen.focus()
	}
}

Dialog.prototype._handleKeyDown = function(e) {
	var Dialog = this
	var KEY_TAB = 9
	var KEY_ESC = 27

	function handleBackwardTab() {
		if (document.activeElement === Dialog.firstFocusableEl) {
			e.preventDefault()
			Dialog.lastFocusableEl.focus()
		}
	}
	function handleForwardTab() {
		if (document.activeElement === Dialog.lastFocusableEl) {
			e.preventDefault()
			Dialog.firstFocusableEl.focus()
		}
	}

	switch (e.keyCode) {
		case KEY_TAB:
			if (Dialog.focusableEls.length === 1) {
				e.preventDefault()
				break
			}
			if (e.shiftKey) {
				handleBackwardTab()
			} else {
				handleForwardTab()
			}
			break
		case KEY_ESC:
			Dialog.close()
			break
		default:
			break
	}
}

Dialog.prototype.addEventListeners = function(openDialogSel, closeDialogSel) {
	var Dialog = this

	var openDialogEls = document.querySelectorAll(openDialogSel)
	for (var i = 0; i < openDialogEls.length; i++) {
		openDialogEls[i].addEventListener('click', function() {
			var queryRow = $(this).closest('tr')
			var queryDescription = queryRow.find('.query-description').html()
			var notes = queryRow.find('td.notes').html()
			handledLocation = queryRow.find('.approveButton').attr('data-value')
			newNoteLocation = queryRow.find('.new-note-location').val()
			$('.dialog .query-description').html(queryDescription)
			$('.dialog .notes').html(notes)

			Dialog.open()
		})
	}

	var closeDialogEls = document.querySelectorAll(closeDialogSel)
	for (var i = 0; i < closeDialogEls.length; i++) {
		closeDialogEls[i].addEventListener('click', function() {
			Dialog.close()
		})
	}
}
