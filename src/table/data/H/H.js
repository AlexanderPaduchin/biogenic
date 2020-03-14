
import React from 'react';
import image1 from './image1.png'
import image2 from './image2.png'
const H = () => (
  <div>
    <div>
      Атом водорода самый легкий и простой по строению.
      Ядро атома содержит один протон, а электронная оболочка состоит из одного электрона,
      находящегося на 1s атомной орбитали.
      Водород- самый распространенный во Вселенной химический элемент.
      Молекула водорода двухатомна.
      Водород - самый легкий газ, поэтому в атмосфере Земли присутствует в следовых количествах.
    </div>
    <div>
      <img src={image1} alt="image1" height={200} style={{ padding: 40 }} />
    </div>
    <div>
      Атомы водорода одной молекулы  могут образовывать межмолекулярные химические связи
      с электроотрицательными элементами фтором, кислородом, азотом другой молекулы.
      Образование этих связей влияет на агрегатное состояние, растворимость в воде,
      пространственную структуру молекулы.
      Водородные связи характерны для всех жизненно важных органических веществ:
      аминокислот, белков, нуклеиновых кислот, углеводов.
      Благодаря водородным связям возникают обратимые межмолекулярные взаимодействия между субстратом и ферментом,
      между отдельными группами в природных полимерах, определяющие их вторичную,
      третичную и четвертичную структуры.
      Ведущую роль водородная связь играет в свойствах воды как растворителя и реагента.
      <div>
        <img src={image2} alt="image2" height={200} style={{ padding: 40 }} />
      </div>
      <div>
        Атомы водорода входят в состав молекулы  воды.
        Организм человека на 60 % состоит из воды, из них 42 % приходится на внутриклеточную жидкость,
        а остальная часть - на внеклеточную (межклеточную) жидкость,
        которую делят  на внутрисосудистую и интерстициальную (межтканевую) жидкость.
        Вода- это среда, в которой протекают химические реакции в организме,
        участвует в обменных процессах как реагент, а также является продуктом реакции,
        например, гидролиза жиров.
        Вода имеет высокое значение теплоемкости (75,3 ДжДмоль • К))
        и большую теплоту испарения (40,8 кДж/моль),
        поэтому участвует в процессе терморегуляции организма.
        У воды большая диэлектрическая проницаемость (в = 78,5).
        В ней хорошо растворяются электролиты: соли, кислоты, основания.
        Распад электролитов на ионы в воде обуславливает высокие скорости
        протекания биохимических реакций,
        быструю миграцию ионов через биологические мембраны и практически мгновенную передачу
        нервных импульсов.
      </div>
      <div>
        В небольшом количестве простое вещество водород обнаружен в кишечнике человека.
        Он образуется при смешанном брожении, которое характерно для кишечной палочки,
        сальмонеллы, холерного эмбриона.
        Этот водород выделяется вместе с непереваренными массами или используется другими бактериями.
        Если среда в кишечнике становятся очень кислой, то выделение водорода усиливается
        и это является показателем неблагоприятных изменений в кишечнике.
      </div>
    </div>
  </div>
);

export default H;