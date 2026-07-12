const items = [
  { label: '受付時間', value: '午前 9:00-12:00 / 午後 16:30-19:00' },
  { label: '休診日', value: '木曜・日曜・祝日' },
  { label: '電話番号', value: '0798-67-1071' },
]

export default function InfoBar() {
  return (
    <div className="infobar">
      <div className="infobar-inner">
        {items.map((item) => (
          <div key={item.label} className="infobar-cell">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
