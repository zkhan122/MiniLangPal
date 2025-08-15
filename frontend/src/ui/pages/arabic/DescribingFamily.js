export default function DescribingFamily() {
    return (
        <div className="container">
            <div className="section">
                <h2 className="greetings-title">Section: Describing Your Family</h2>
                <p>
                To talk about your family, you can use the possessive pronoun <b><u>ـي</u></b> (-ee) at the end of a noun, which means "my." To describe a family member, you must use an adjective that matches their gender.
                </p>
                <br></br>
                <h2 className="intros-title">Basic Family Members</h2>
                <div className="card-container">
                    <div className="green-card">
                        <p className="arabic-text">أَبِي</p>
                        <p className="intro-romanization">"A-bee"</p>
                        <p className="translation">My father</p>
                    </div>
                    <div className="green-card">
                        <p className="arabic-text">أُمِّي</p>
                        <p className="intro-romanization">"Um-mee"</p>
                        <p className="translation">My mother</p>
                    </div>
                    <div className="green-card">
                        <p className="arabic-text">أَخِي</p>
                        <p className="intro-romanization">"Akh-ee"</p>
                        <p className="translation">My brother</p>
                    </div>
                    <div className="green-card">
                        <p className="arabic-text">أُخْتِي</p>
                        <p className="intro-romanization">"Ukh-tee"</p>
                        <p className="translation">My sister</p>
                    </div>
                </div>
                
                <h2 className="intros-title">Common Adjectives for Description</h2>
                <div className="card-container">
                    <div className="intro-card">
                        <p className="arabic-text">طَوِيلٌ</p>
                        <p className="intro-romanization">"Ta-weel-un"</p>
                        <p className="translation">Tall (Masculine)</p>
                    </div>
                    <div className="intro-card">
                        <p className="arabic-text">طَوِيلَةٌ</p>
                        <p className="intro-romanization">"Ta-wee-la-tun"</p>
                        <p className="translation">Tall (Feminine)</p>
                    </div>
                    <div className="intro-card">
                        <p className="arabic-text">قَصِيرٌ</p>
                        <p className="intro-romanization">"Qa-seer-un"</p>
                        <p className="translation">Short (Masculine)</p>
                    </div>
                    <div className="intro-card">
                        <p className="arabic-text">قَصِيرَةٌ</p>
                        <p className="intro-romanization">"Qa-see-ra-tun"</p>
                        <p className="translation">Short (Feminine)</p>
                    </div>
                </div>

                <h2 className="intros-title">Putting it Together: Describing Family Members</h2>
                <div className="card-container">
                    <div className="terms-card">
                        <p className="arabic-text">أَخِي طَوِيلٌ</p>
                        <p className="intro-romanization">"Akh-ee ta-weel-un"</p>
                        <p className="translation">My brother is tall.</p>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">أُخْتِي طَوِيلَةٌ</p>
                        <p className="intro-romanization">"Ukh-tee ta-wee-la-tun"</p>
                        <p className="translation">My sister is tall.</p>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">أَبِي قَصِيرٌ</p>
                        <p className="intro-romanization">"A-bee qa-seer-un"</p>
                        <p className="translation">My father is short.</p>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">أُمِّي قَصِيرَةٌ</p>
                        <p className="intro-romanization">"Um-mee qa-see-ra-tun"</p>
                        <p className="translation">My mother is short.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}