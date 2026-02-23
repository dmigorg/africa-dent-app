interface YandexMapProps {
  id: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}

const YandexMap = ({
  id,
  width = '100%',
  height = 300,
  title = 'Карта проезда',
}: YandexMapProps) => {
  const mapUrl = `https://yandex.ru/map-widget/v1/?um=constructor%3A${id}&source=constructor`;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe src={mapUrl} width={width} height={height} frameBorder={0} title={title} />
    </div>
  );
};

export default YandexMap;
