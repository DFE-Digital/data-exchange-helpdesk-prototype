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

	$('body').addClass('js-enabled')

	$('input').attr('autocomplete', 'off')

	function getStickyItemPosition() {
		try {
			if ($('.sticky-item').offset()) {
				var itemTop = $('.sticky-item').offset().top
				var itemPadding = parseInt(
					$('.sticky-item')
						.css('padding-top')
						.replace('px', '')
				)

				return itemTop + itemPadding
			}
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
			var selectedQuery = queryRow.find('.query-index').html()
			var selectedQueryType = queryRow.find('.query-category').text()
			var selectedQueryGuide = queryRow.find('.query-guide').text()
			if (selectedQueryType == 'error') {
				$('.dialog label[for="reject-reason"]').html(
					'Explain why you cannot fix this data in your MIS'
				)
				$('.dialog .error-warning').show()
			} else {
				$('.dialog label[for="reject-reason"]').html('Explanation')
				$('.dialog .error-warning').hide()
			}
			$('#selectedQuery').val(selectedQuery)
			$('.dialog .query-description').html(queryDescription)
			$('.dialog .notes').html(notes)
			$('.dialog .guide').html(selectedQueryGuide)

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

function SortableTable(table) {
	var table = table
	var status

	var options = {}
	options.statusMessage = 'Sort by %heading% (%direction%)'
	options.ascendingText = 'ascending'
	options.descendingText = 'descending'

	createHeadingButtons()
	createStatusBox()

	function createHeadingButtons() {
		var headings = table.querySelectorAll('thead th')
		var heading

		for (var i = 0; i < headings.length; i++) {
			heading = headings[i]
			if (heading.getAttribute('aria-sort')) {
				createHeadingButton(heading, i)
			}
		}
	}

	function createHeadingButton(heading, i) {
		var text = heading.textContent
		var button = document.createElement('button')
		button.setAttribute('type', 'button')
		button.setAttribute('data-index', i)
		button.textContent = text
		button.addEventListener('click', sortButtonClicked)
		heading.textContent = ''
		heading.appendChild(button)
	}

	function sortButtonClicked(event) {
		var columnNumber = event.target.getAttribute('data-index')
		var sortDirection = event.target.parentElement.getAttribute('aria-sort')
		var newSortDirection
		if (sortDirection === 'none' || sortDirection === 'ascending') {
			newSortDirection = 'descending'
		} else {
			newSortDirection = 'ascending'
		}

		var tBodies = table.querySelectorAll('tbody')

		sortTBodies(tBodies, columnNumber, newSortDirection)

		for (var i = tBodies.length - 1; i >= 0; i--) {
			var rows = getTableRowsArray(tBodies[i])
			var sortedRows = sort(rows, columnNumber, newSortDirection)
			addRows(tBodies[i], sortedRows)
		}

		removeButtonStates()
		updateButtonState(event.target, newSortDirection)
	}

	function sortTBodies(tBodies, columnNumber, sortDirection) {
		var tBodiesAsArray = []

		for (var i = 0; i < tBodies.length; i++) {
			tBodiesAsArray.push(tBodies[i])
		}

		var newTbodies = tBodiesAsArray.sort(function(tBodyA, tBodyB) {
			var tBodyAHeaderRow = tBodyA.querySelector('th[scope="rowgroup"]')

			var tBodyBHeaderRow = tBodyB.querySelector('th[scope="rowgroup"]')

			if (tBodyAHeaderRow && tBodyBHeaderRow) {
				tBodyAHeaderRow = tBodyAHeaderRow.parentElement
				tBodyBHeaderRow = tBodyBHeaderRow.parentElement

				var tBodyACell = tBodyAHeaderRow.querySelectorAll('td, th')[
					columnNumber
				]
				var tBodyBCell = tBodyBHeaderRow.querySelectorAll('td, th')[
					columnNumber
				]

				var tBodyAValue = getCellValue(tBodyACell)
				var tBodyBValue = getCellValue(tBodyBCell)

				return compareValues(tBodyAValue, tBodyBValue, sortDirection)
			} else {
				console.log('no way to compare tbodies')
				return 0
			}
		})

		for (var i = 0; i < newTbodies.length; i++) {
			table.append(newTbodies[i])
		}
	}

	function getTableRowsArray(tbody) {
		var rows = []
		var trs = tbody.querySelectorAll('tr')
		for (var i = 0; i < trs.length; i++) {
			rows.push(trs[i])
		}
		return rows
	}

	function sort(rows, columnNumber, sortDirection) {
		var newRows = rows.sort(function(rowA, rowB) {
			var tdA = rowA.querySelectorAll('td, th')[columnNumber]
			var tdB = rowB.querySelectorAll('td, th')[columnNumber]

			var rowAIsHeader = rowA.querySelector('th[scope="rowgroup"]')
			var rowBIsHeader = rowB.querySelector('th[scope="rowgroup"]')

			var valueA = getCellValue(tdA)
			var valueB = getCellValue(tdB)

			if (rowAIsHeader) {
				return -1
			} else if (rowBIsHeader) {
				return 1
			} else {
				if (sortDirection === 'ascending') {
					if (valueA < valueB) {
						return -1
					}
					if (valueA > valueB) {
						return 1
					}
					return 0
				} else {
					if (valueB < valueA) {
						return -1
					}
					if (valueB > valueA) {
						return 1
					}
					return 0
				}
			}
		})
		return newRows
	}

	function getCellValue(cell) {
		var cellValue = cell.getAttribute('data-sort-value') || cell.textContent
		cellValue = parseFloat(cellValue) || cellValue

		return cellValue
	}

	function addRows(tbody, rows) {
		for (var i = 0; i < rows.length; i++) {
			tbody.append(rows[i])
		}
	}

	function removeButtonStates() {
		var tableHeaders = table.querySelectorAll('thead th')

		for (var i = tableHeaders.length - 1; i >= 0; i--) {
			tableHeaders[i].setAttribute('aria-sort', 'none')
		}
	}

	function updateButtonState(button, direction) {
		button.parentElement.setAttribute('aria-sort', direction)
		var message = options.statusMessage
		message = message.replace(/%heading%/, button.textContent)
		message = message.replace(/%direction%/, options[direction + 'Text'])
		status.textContent = message
	}

	function compareValues(valueA, valueB, sortDirection) {
		if (sortDirection === 'ascending') {
			if (valueA < valueB) {
				return -1
			}
			if (valueA > valueB) {
				return 1
			}
			return 0
		} else {
			if (valueB < valueA) {
				return -1
			}
			if (valueB > valueA) {
				return 1
			}
			return 0
		}
	}

	function createStatusBox() {
		status = document.createElement('div')
		status.setAttribute('aria-live', 'polite')
		status.setAttribute('role', 'status')
		status.setAttribute('aria-atomic', 'true')
		status.setAttribute('class', 'sortable-table-status')

		table.parentElement.insertBefore(status, table.nextSibling)
	}
}

$('a[href]').addClass('govuk-link--no-visited-state')

function iterationRoute(str, path) {
	var pathParts = []
	while (path.length != 0) {
		pathParts.push(path.substring(path.lastIndexOf('/'), path.length))
		path = path.slice(0, -pathParts[pathParts.length - 1].length)
	}
	return str.replace(
		'#root#',
		pathParts[pathParts.length - 1] + pathParts[pathParts.length - 2]
	)
}

var windowPath = window.location.pathname

$('a[href*=#root#]').each(function() {
	$(this).attr('href', iterationRoute($(this).attr('href'), windowPath))
})

$('.hmcts-sub-navigation')
	.find('a[href=""]')
	.closest('.hmcts-sub-navigation__item')
	.hide()
