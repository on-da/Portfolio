import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

//趣味を書いていくコンポーネント
export default class Hobby extends Component {
    render() {
        return (
            <Col >
                <h1>趣味・嗜好</h1>

                <Card className="textarea">
                    <CardBody>
                        <CardTitle>ゲーム</CardTitle>
                        <CardText>携帯ゲームはFateGrandOrder、ドールズフロントライン、崩壊3rdを最近はやってます。
                            中国のアプリゲームの作り込みが凄いなあって感じる今日この頃です。
                            コンシューマもその時に合わせて色々やったりしますがロボットゲームが結構好きだったり。
                            アーマードコア新作…。今はデモンエクスマキナで欲求を満たしてます。</CardText>
                    </CardBody>
                </Card>


                <Card className="textarea">
                    <CardBody>
                        <CardTitle>旅行、食べ歩き</CardTitle>
                        <CardText>旅行してツアーとかじゃなくて気の向くまま名所を巡ったりするのが好きです。ぶらり旅的な。
                            ご当地グルメみたいなのも食べるのも好きです。地元の人しか知らないマイナーな美味しい食べ物とか好きですね。
                        </CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}