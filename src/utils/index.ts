export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const timeSince = (date: string): string =>  {
    const timeFormat = new Intl.RelativeTimeFormat('en', { style: 'long' });

    const now = new Date();
    const targetDate = new Date(date);
    const difference = now.getTime() - targetDate.getTime();
    const millisecondsToDays: number = 1000 * 3600 * 24;
    const totalDays = Math.ceil(difference / millisecondsToDays);

    // Handling only days, months & years for now
    if (totalDays === 365) {
        return timeFormat.format(-(totalDays / 365).toFixed(0), 'year');
    }
    if (totalDays > 365) {
        return timeFormat.format(-(totalDays / 365).toFixed(0), 'years');
    }
    if (totalDays === 30) {
        return timeFormat.format(-(totalDays / 30).toFixed(0), 'month');
    }
    if (totalDays > 30) {
        return timeFormat.format(-(totalDays / 30).toFixed(0), 'months');
    }

    if (totalDays > 7) {
        return timeFormat.format(-(totalDays / 7).toFixed(0), 'weeks');
    }

    if (totalDays === 7) {
        return timeFormat.format(-(totalDays / 7).toFixed(0), 'week');
    }

    if (totalDays < 7) {
        return timeFormat.format(-(totalDays), 'days');
    }
    if (totalDays === 1) {
        return timeFormat.format(-1, 'day');
    }

    return ""
}

export const  unique = (value: any, index: number, self: string | any[]): boolean => {
  return self.indexOf(value) === index;
}