const addressRows = [
  { label: '住所', value: '〒663-8113\n西宮市甲子園口3丁目22番4号' },
  { label: '電話番号', value: '0798-67-1071' },
  { label: '最寄り駅', value: 'JR神戸線 甲子園口駅 徒歩7分\n駅南出口より本通り商店街を南へ6分\n栄徳大神で右折し1分' },
  { label: '駐車場', value: '1台完備' },
]

const days = ['月', '火', '水', '木', '金', '土', '日']
const hoursGrid = [
  { label: '午前 9:00-12:00', slots: [true, true, true, false, true, true, false] },
  { label: '午後 16:30-19:00', slots: [true, true, true, false, true, false, false] },
]

export default function Access() {
  return (
    <section id="access" className="section section-white">
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">ACCESS</p>
          <h2>アクセス</h2>
          <p>JR神戸線 甲子園口駅から徒歩7分。診療時間をご確認のうえ、ご来院ください。</p>
        </div>

        <div className="access-grid">
          <div className="access-copy reveal">
            <table className="access-table">
              <tbody>
                {addressRows.map(({ label, value }) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="hours-block">
              <p className="table-title">診療時間</p>
              <div className="hours-table-scroll">
                <table className="hours-table">
                  <thead>
                    <tr>
                      <th scope="col" />
                      {days.map((day) => (
                        <th key={day} scope="col">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {hoursGrid.map(({ label, slots }) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        {slots.map((open, index) => (
                          <td key={`${label}-${index}`} className={open ? 'is-open' : undefined}>
                            {open ? '○' : '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="hours-note">休診日：木、日、祝日</p>
            </div>
          </div>

          <div className="map-panel reveal">
            <iframe
              src="https://maps.google.com/maps?q=西宮市甲子園口３丁目２２番４号&hl=ja&output=embed"
              width="100%"
              height="360"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="松島医院 地図"
            />
            <p>〒663-8113 西宮市甲子園口3丁目22番4号</p>
          </div>
        </div>
      </div>
    </section>
  )
}
