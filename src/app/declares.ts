// Пока не разобрался как правильно импортировать картинки (как в реакте через import не робит), приделал пока такой костыль

declare module '*.png' {
  const content: string;
  export default content;
}
