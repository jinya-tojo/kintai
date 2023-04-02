export const formatToDay = (milliseconds: number) => {
  const date = new Date(milliseconds)

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const millisecondsToMinutes = (milliseconds: number) => {
  const seconds = milliseconds / 1000
  const minutes = Math.ceil(seconds / 60)
  const hours = Math.floor(minutes / 60)

  const remainingMinutes = minutes % 60
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0')

  return `${hours}:${formattedMinutes}`
}

export const convertTimeToHours = (timeString: string): number => {
  const [hoursString, minutesString] = timeString.split(':');
  const hours = Number(hoursString);
  const minutes = Number(minutesString);
  const totalHours = hours + (minutes / 60);
  return Math.ceil(totalHours * 100) / 100;
}
