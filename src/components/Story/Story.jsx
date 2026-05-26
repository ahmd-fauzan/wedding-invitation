import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Story.css";

const Story = () => {
  return (
    <div className="story-section">
      <h1 className="title">Love Story</h1>
      <div className="story-column">
        <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
            <div className="line"></div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">Awal Bertemu</p>
                <p className="story-description">Kami pertama kali bertemu saat SMP kelas 8 sebagai teman sekelas, namun belum saling dekat. Setelah sama-sama bekerja, kami kembali berkomunikasi melalui Facebook lalu berlanjut ke WhatsApp. Pertemuan di Situ Gede menjadi awal kedekatan kami hingga akhirnya tumbuh rasa cinta dan saling melengkapi satu sama lain.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
            <div className="line"></div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">Acara Lamaran</p>
                <p className="story-description">Setelah menjalani hubungan dan mengenal satu sama lain lebih dalam, kami memutuskan membawa hubungan ini ke jenjang yang lebih serius melalui acara lamaran yang bertepatan dengan momen Tahun Baru Hijriah, sebagai langkah awal menuju masa depan bersama.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">Acara Resepsi</p>
                <p className="story-description">Dengan penuh rasa syukur dan cinta, kami memutuskan untuk menikah dan memulai kehidupan baru bersama. Kami percaya bahwa setiap hubungan adalah tentang saling menerima, memahami, dan melengkapi kekurangan satu sama lain sebagai pasangan suami istri.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
