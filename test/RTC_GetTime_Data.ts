lcd.clearScreen()
lcd.displayText("Day  :", 1, 1)
lcd.displayText(convertToText(ds3231.getDate()), 8, 1)
basic.pause(3000)
lcd.displayText("Date : " + convertToText(ds3231.getDayMonthYear(ds3231.Calendar.Day)), 1, 2)
lcd.displayText("Month: " + convertToText(ds3231.getDayMonthYear(ds3231.Calendar.Month)), 1, 3)
lcd.displayText("Year : " + convertToText(ds3231.getDayMonthYear(ds3231.Calendar.Year)), 1, 4)
