import React from 'react';
import image1 from './imageN1.png'
import image2 from './imageN2.png'
import image3 from './imageN3.png'
import image4 from './imageN4.png'
import image5 from './imageN5.png'
const N = () => (
  <div>
    <div>
      {`
Это элемент 2 периода V A группы.Электронная конфигурация атома азота `}<b>1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></b>{`.
В основном состоянии на внешнем электронном слое три неспаренных электрона.
Переход в возбужденное состояние не возможен.Азот встречается в природе в виде простого
вещества и в составе сложных соединений.
Молекула простого вещества очень прочная,
так как между атомами азота химическая связь обеспечивается
тремя общими электронными парами.
`}
    </div>
    <div>
      <img src={image1} alt="image1" height={200} style={{ padding: 40 }} />
    </div>
    <div>
      {`
При обычных условиях азот химически инертен. Простое вещество азот( `}<b>N<sub>2</sub></b>{` ) -
основной компонент воздуха: его массовая доля 78 %.Из - за химической инертности азота
 многие живые системы не могут его усваивать.Процесс усвоения называется фиксацией азота.
 Этот процесс совершается азотфиксирующими бактериями
 бобовых растений и пурпурных и синезеленых водорослей, а также  во время грозы( `}<b>N<sub>2</sub>+ O<sub>2</sub> = 2NO</b>{` ).
 `}
    </div>
    <div>
      <img src={image2} alt="image2" height={200} style={{ padding: 40 }} />
    </div>
    <div>
      {`
Животные используют растения как источник азотсодержащих
биосубстратов для синтеза белков и нуклеиновых кислот.
Азот входит в состав азотистых оснований нуклеотидов, является частью ДНК -
самого важного органического вещества организма, в котором кодируются белки, соответственно,
наследственные признаки организма.
Молекулы РНК тоже содержат азот.
`}
    </div>
    <div>
      {`
  α - аминокислоты – мономеры природных полимеров белков,
  кирпичиков живого организма содержат азот в основном составе аминогрупп – `}<b>NH<sub>2</sub></b>{`.
  `}
    </div>
    <div>
      {`
Кислородсодержащие соединения азота и их биологическое значение.
`}
    </div>
    <ul>
      <li>
        <div>{`1) Оксид азота(I) - несолеобразующий оксид.Атомы азота в
этом веществе имеют разную степень окисления.Это бесцветный газ.
В смеси с кислородом его используют в медицине в виде ингаляционного наркоза.
При малых концентрациях вызывает возбуждение(“веселящий газ”),
а при больших – человек засыпает(общий наркоз).Его недостаток – токсичен. `}
        </div>
        <div>
          <img src={image3} alt="image3" height={200} style={{ padding: 40 }} />
        </div>
      </li>
      <li>{` 2) оксид азота(II) - несолеобразующий оксид NO.Он может образовывать
комплексное соединение с катионом железа гемоглобина, заменяя в нем  кислород.
Образующееся соединение очень устойчиво и токсично.
В конце 1980 - х годов было установлено, что оксид азота(II) синтезируется в организме человека
 с помощью фермента NO - синтазы из аминокислоты аргинина.
 Нахождение  NO в клетках занимает долю секунды, но их нормальное функционирование невозможно без NO.
 Оксид азота(II) обеспечивает расслабление гладких мышц сосудов, регуляцию работы сердца,
 эффективную работу иммунной системы, передачу нервных импульсов.
 Есть мнение, что NO играет значительную роль в обучении и запоминании.`}</li>
      <li><div>
        {`3) Атомы азота  входят в состав АТФ, НАД, НАДФ, ФАД, которые играют важную и
незаменимую роль  в процессах биологического окисления и фотосинтеза. `}
      </div>
        <div>
          <img src={image4} alt="image4" height={200} style={{ padding: 40 }} />
          <img src={image5} alt="image5" height={200} style={{ padding: 40 }} />
        </div>
      </li>
      <li>{` 4) Аммиак - летучее водородное соединение азота(`}<b>NH<sub>3</sub></b>{` ).Аммиак -
конечный продукт обмена азота в организме человека и животных.
Он образуется при метаболизме белков, аминокислот и других азотистых соединений организма.
Аммиак – токсичное соединение, поэтому он выводится из организма  в результате  орнитинового
цикла и преобразуется  печенью в карбамид(мочевину `}<b>(NH<sub>2</sub>)<sub>2</sub>CO</b>{`.
Мочевина выводится почками, причём часть мочевины может быть
 конвертирована печенью или почками обратно в аммиак.`}</li>

    </ul>

    <div>
      {`
В печени происходит и обратный процесс — ресинтез аминокислот
из аммиака и кетоаналогов аминокислот.Он  называется «восстановительное аминирование».
Так  из щавелевоуксусной кислоты получается аспарагиновая,
из α - кетоглутаровой — глутаминовая  кислота.
    `}
    </div>
    <div>
      {`
При попадании через дыхательные пути в организм аммиак может вызвать
токсический отёк лёгких и тяжёлое поражение нервной системы.
Выброс аммиака в окружающую среду  классифицируют как техногенную аварию
с выбросом химически опасных  веществ.
`}
    </div>
  </div>);

export default N;