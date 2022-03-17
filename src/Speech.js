import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { text } from './constant';
const Speech = () => {
const [value, setValue] = React.useState(text);
const { speak } = useSpeechSynthesis();
return (
	<div className="speech">
        <div className="group">
        <div class="main-container">
            <br />
            <h3>What is StudyHome about?</h3>
            <br />
            <br />
            <p>
                Young children hailing from underprivileged backgrounds, living in disadvantaged communities - where a lack of money is a real problem - are often inhibited from having a good educational experience.
                <br/>
                There are multiple possible reasons for a disadvantaged child's education being affected.
                Reasons which include (but are not exclusive to):
                <br />
                -Being unable to afford home-tuition
                <br />
                -Being unable to obtain educational materials (such as books)
                <br />
                -Being unable to consistently commute to (a good) school
                <br />
                -With a lack of energy, as a result of inadequate nourishment, being unable to concentrate at school.
                <br />
                <br />
                "Over three-quarters of respondents to an NEU survey told us their students had demonstrated fatigue (78%) or poor concentration (75%) in school as a result of poverty." (neu.org.uk)
                <br />
                In particular, young children aged 7-11 ('Key Stage 2', in the UK) are at an age where having a high quality education is most crucial, because, as rileychildrens.org states:
                "School-age children have replaced magical thinking and prelogical thinking with concrete logical thinking."
                <br />
                <br />
                Children of this age group, whose cognitive abilities to utilize logical thinking are being formed, must (at this age) be developing a foundationally concrete understanding of Key Stage 2 mathematics and science, without the risk of falling behind due to harsh external factors.
                <br />
                <br />
                That's where StudyHome comes in. StudyHome exists to provide a freely accessible and high quality online education, so that no child must be deprived of fundamental knowledge that can help them have a better future.
                <br />
                <br />
                StudyHome places an emphasis on mathematics and science, because they're the subjects that promise to equip children with the knowledge to make practical sense of the world, but also contains a broader range of topics and fun quizzes, to offer every student an enriching experience.
            </p>
        </div>
        </div>
        <div className="group">
            <button onClick={() => speak({ text: value })}>
            Speech
            </button>
        </div>
	</div>
);
};
export default Speech;
