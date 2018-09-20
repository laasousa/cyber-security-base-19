import React, { Fragment } from 'react'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import ScheduleTimeline from '../components/ScheduleTimeline'
import MailinglistForm from '../components/MailinglistForm'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import GatsbyLink from 'gatsby-link'

const IndexPage = () => (
  <Fragment>
    <Sidebar />
    <ContentArea>
      <Banner />
      <Layout>
        <section id="yleistä">
          <h1>Tietoa kurssista</h1>
          <p>
            Ohjelmoinnin MOOC on kaikille avoin ja ilmainen ohjelmoinnin perusteet
            opettava verkkokurssi. Kurssilla perehdytään nykyaikaisen ohjelmoinnin
            perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi
            algoritmien laatimiseen. Kurssille osallistuminen ei vaadi
            ennakkotietoja ohjelmoinnista.
          </p>
          <p>
            Ohjelmoinnin MOOC vastaa sisällöltään Helsingin yliopiston
            tietojenkäsittelytieteen laitoksen kursseja Ohjelmoinnin perusteet
            ja Ohjelmoinnin jatkokurssi. Kurssit vastaavat yhteensä kymmentä
            opintopistettä (5+5).
          </p>
          <p>
            Ohjelmoinnin MOOC tarjoaa mahdollisuuden opinto-oikeuteen
            tietojenkäsittelytieteen opintoihin Helsingin yliopistolla. Mikäli
            haet kurssin kautta opinto-oikeutta, lue kaikki opinto-oikeuden
            hakemiseen liittyvät tiedot huolellisesti. Esimerkiksi tehtävien
            aikarajoista EI voida joustaa lainkaan. Ehdot opinto-oikeuden
            saamiseksi päivittyvät lähempänä yhteishakua. Lisätietoa
            opinto-oikeudesta saat{' '}
            <GatsbyLink to="/opinto-oikeus">täältä</GatsbyLink>.
          </p>
          <MailinglistForm />
        </section>

        <section id="kurssin-kaksi-versiota">
          <h2>Kurssin kaksi versiota</h2>

          <p>
            Kurssista julkaistaan aluksi yksi aikataulutettu versio. Niille,
            jotka ei pysy aikataulussa mukana, tullaan tarjoamaan mahdollisuus
            siirtyä aikatauluttomaan versioon.
          </p>
        </section>

        <section id="sisältö-ja-aikataulu">
          <h2>Sisältö ja aikataulu</h2>

          <p>
            Kurssi koostuu neljästätoista tehtäväsarjasta. Kunkin tehtäväsarjan
            tekemiseen kannattaa varata aikaa noin 5-20 tuntia. Varaamme
            oikeuden aikataulun ja aiheiden muutoksiin, kuitenkin niin, että
            jokaista tehtäväsarjaa on mahdollista suorittaa vähintään kahden
            viikon ajan.
          </p>

          <p>
            Kurssin sisältö tarkentuu kurssin edetessä. Tietoa kurssin
            aikatauluista sekä sisällöstä lisätään tälle sivulle kurssin
            aloituksen lähestyessä.
          </p>

          <table>
            <thead>
              <tr>
                <th>Aikataulu</th>
                <th>Julkaisu</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Osa 1</td>
                <td>14.12.2018</td>
                <td>21.1.2019</td>
              </tr>
              <tr>
                <td>Osa 2</td>
                <td>28.12.2018</td>
                <td>28.1.2019</td>
              </tr>
              <tr>
                <td>Osa 3</td>
                <td>11.1.2019</td>
                <td>4.2.2019</td>
              </tr>
              <tr>
                <td>Osa 4</td>
                <td>25.1.2019</td>
                <td>11.2.2019</td>
              </tr>
              <tr>
                <td>Osa 5</td>
                <td>1.2.2019</td>
                <td>18.2.2019</td>
              </tr>
              <tr>
                <td>Osa 6</td>
                <td>8.2.2019</td>
                <td>25.2.2019</td>
              </tr>
              <tr>
                <td>Osa 7</td>
                <td>15.2.2019</td>
                <td>4.3.2019</td>
              </tr>
              <tr>
                <td>Osa 8</td>
                <td>1.3.2019</td>
                <td>18.3.2019</td>
              </tr>
              <tr>
                <td>Osa 9</td>
                <td>8.3.2019</td>
                <td>25.3.2019</td>
              </tr>
              <tr>
                <td>Osa 10</td>
                <td>15.3.2019</td>
                <td>1.4.2019</td>
              </tr>
              <tr>
                <td>Osa 11</td>
                <td>22.3.2019</td>
                <td>8.4.2019</td>
              </tr>
              <tr>
                <td>Osa 12</td>
                <td>29.3.2019</td>
                <td>15.4.2019</td>
              </tr>
              <tr>
                <td>Osa 13</td>
                <td>12.4.2019</td>
                <td>29.4.2019</td>
              </tr>
              <tr>
                <td>Osa 14</td>
                <td>19.4.2019</td>
                <td>6.5.2019</td>
              </tr>
            </tbody>
          </table>

          <p>
            <b>
              Määräajat ovat aina maanantaisin. Määräaikojen kellonajat ovat
              aina 23:59:00 – osan 1 tehtävät tulee palauttaa siis viimeistään
              21.1.2019 klo 23:59:00. Virallisena määräaikana käytetään
              tehtäväpalvelimen kelloa, joka on Suomen ajassa. Huomaa, että oman
              koneesi kello voi olla jäljessä tai edellä, joten älä jätä
              tehtävien tekemistä ja palauttamista viime hetkeen.
            </b>
          </p>
        </section>

        <section id="kurssin-arvostelu">
          <h2>Kurssin arvostelu</h2>

          <p>
            Ohjelmoinnin MOOC koostuu kahdesta yliopistotason ohjelmointikurssista,
            jotka kummatkin arvostellaan erikseen. Kummankin kurssin jälkeen
            järjestetään verkkotentti. Verkkotenttiin saa osallistua kun tekee
            vähintään 75 % kunkin osan tehtävistä. Kurssin arvosana määräytyy seuraavasti:
          </p>

          <ul>
            <li>
              yli 90% tenttipisteistä: arvosana 5/5.
            </li>
            <li>
              80-90% tenttipisteistä: arvosana 4/5.
            </li>
            <li>
              70-80% tenttipisteistä: arvosana 3/5.
            </li>
            <li>
              60-70% tenttipisteistä: arvosana 2/5.
            </li>
            <li>
              50-60% tenttipisteistä: arvosana 1/5.
            </li>
            <li>
              alle 50% tenttipisteistä: hylätty suoritus
            </li>
          </ul>

          <p>
            Arvosana kirjataan Helsingin yliopiston opintorekisteriin. Verkkotenteistä
            järjestetään useita uusintoja.
          </p>
        </section>

      </Layout>
    </ContentArea>
  </Fragment>
)

export default IndexPage