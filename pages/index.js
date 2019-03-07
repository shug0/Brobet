import React, { Component } from 'react'
import { Wrapper } from '../components'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { user: this.props.user }
  }

  render () {
    const { user } = this.state

    return (
      <Wrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sem egestas, imperdiet nulla eget, ornare quam. Sed eros ipsum, lobortis eu velit et, vehicula pharetra enim. Etiam gravida urna non quam consequat porta. Morbi sit amet ornare arcu, vitae ullamcorper lorem. Sed ultrices placerat diam, eget efficitur purus. Nulla maximus metus turpis, vitae convallis lacus feugiat a. Etiam porta pellentesque justo non laoreet. Donec mauris justo, mattis quis lectus ac, pharetra dictum eros. Nam purus nisi, imperdiet eget felis sed, vestibulum varius sapien. Proin id posuere felis. Praesent aliquet suscipit neque, a venenatis mi aliquam ac. Nulla facilisi. Aliquam varius lobortis lorem. Aliquam erat volutpat.

        Nullam placerat, turpis in molestie rutrum, neque dolor posuere mauris, id molestie erat nisl quis dui. Mauris eget ex eu neque laoreet accumsan vel ac massa. Sed efficitur nunc nec lacus mollis, a finibus magna viverra. Aenean laoreet, orci eu ultrices volutpat, justo dui luctus tortor, in feugiat tellus ligula id magna. Donec vestibulum consequat nisi ut facilisis. Nulla vitae elementum lectus. Nulla non scelerisque velit.

        Fusce eu justo a orci cursus commodo ac vel orci. Sed facilisis pharetra nulla, vel luctus nisi convallis in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit vulputate metus, quis bibendum sapien porttitor quis. Cras eu nulla sed diam fermentum congue. Nunc a convallis ipsum. Ut commodo, quam non dictum viverra, ipsum ex lacinia erat, vitae tempus nibh nisi non est. Nulla accumsan ultricies felis ultricies molestie. Phasellus sollicitudin erat in tellus commodo imperdiet. Pellentesque sem libero, facilisis et dignissim id, finibus sed nibh. Quisque porta massa quis urna imperdiet bibendum.

        Sed metus nunc, dictum sed congue quis, pulvinar ac nibh. Nam tempor dui arcu, a posuere odio semper non. Vivamus molestie mi sit amet sapien mollis porttitor. Nullam lobortis vestibulum mi, ac tincidunt magna bibendum at. Proin nec dictum odio. Duis id orci ut massa facilisis vehicula id eu orci. Maecenas suscipit, mauris convallis fermentum fringilla, quam magna semper nibh, vitae sollicitudin augue urna eget ligula. Ut fermentum tortor massa, ut vulputate nunc aliquam ac. Etiam metus magna, aliquet nec sollicitudin non, laoreet eu lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper mauris elit, ac aliquam arcu volutpat sed. Nulla rhoncus lacus imperdiet magna suscipit auctor. Maecenas metus quam, congue ut mauris ultrices, pulvinar porta est. Donec facilisis id magna ut rhoncus. Maecenas eget egestas orci.

        Curabitur libero est, vulputate et condimentum a, hendrerit ac risus. Morbi id libero molestie, congue ante nec, bibendum felis. Cras maximus tellus leo, vitae pharetra felis bibendum in. Nam mollis luctus sapien, eu posuere nulla iaculis quis. Vestibulum bibendum eros lacus, non dapibus ante euismod eu. Donec molestie risus ut metus scelerisque, vitae ultrices lacus vestibulum. Nam dapibus pulvinar finibus. Aliquam id consequat velit, a congue augue. Etiam rutrum placerat felis, sed fermentum nisi euismod ut. Nulla aliquet, massa id varius semper, risus neque rhoncus velit, ullamcorper aliquam urna nisl ullamcorper nunc. Quisque eget imperdiet leo, tempor dictum lacus. Donec porta convallis nisi id laoreet. Proin pharetra, turpis ut varius vestibulum, libero purus sodales enim, ut malesuada enim velit in ante.

        Duis non est ut nisl imperdiet sollicitudin. Suspendisse ac sollicitudin diam. Aliquam lacinia dignissim felis. Suspendisse potenti. Donec dignissim, ipsum vel pulvinar scelerisque, eros magna mattis magna, id iaculis arcu magna eget ipsum. Praesent dictum sapien libero, in lobortis sapien egestas nec. Praesent in est iaculis, posuere orci vitae, posuere orci. Vivamus hendrerit nec nisl quis sodales. Aliquam interdum ex et magna hendrerit, a facilisis nulla hendrerit. Sed non ultrices leo.

        Morbi pharetra, metus non commodo bibendum, mauris ante vestibulum massa, quis vulputate sem orci quis elit. Ut lacus nulla, lobortis ac rutrum non, condimentum nec ligula. Vivamus mollis tristique nibh, at tristique nulla varius in. Vestibulum et interdum sapien. Aenean imperdiet faucibus faucibus. Donec tempor, risus sit amet auctor porttitor, ex neque dignissim nisl, malesuada rutrum velit tortor id tortor. Integer quis facilisis nulla. Vivamus non tellus est. Duis lectus massa, ullamcorper sit amet ullamcorper in, suscipit a neque. In quis placerat ligula.

        Phasellus pulvinar facilisis rhoncus. Proin fermentum magna id nisl commodo lobortis. Vestibulum tellus purus, tempus vitae turpis eu, bibendum placerat lorem. Aenean in accumsan orci. Proin in nibh quis mauris porta eleifend. Sed fringilla, nisi non convallis faucibus, purus diam dictum orci, eget tempor nunc odio sed lacus. Nullam luctus, nulla ac tincidunt bibendum, enim nisl auctor lectus, ut suscipit erat diam eget arcu. Curabitur sit amet rutrum enim. Sed viverra sapien pellentesque, vestibulum urna vel, condimentum turpis. Aliquam eget tellus eget dui varius semper non sit amet lectus. Vestibulum quis rutrum tortor, in sagittis quam. Aenean eu orci tellus. Curabitur quis nisi ac lacus facilisis molestie in sed ligula. Vestibulum scelerisque nisi nec est auctor imperdiet.

        Nam vel ex non odio sagittis faucibus. Vivamus ac tellus ipsum. Fusce malesuada neque nec sem vulputate ornare. Nullam nibh ligula, volutpat eu orci quis, consectetur aliquam risus. Proin bibendum odio odio, et aliquam lorem ultricies eget. Vestibulum malesuada lobortis quam ut efficitur. Morbi ac rhoncus diam. Proin rutrum sem a ligula mollis, in posuere turpis tempus. Cras quis nunc at felis tincidunt eleifend convallis feugiat tellus. Suspendisse nec lobortis leo. Nam rhoncus dui a metus sodales, nec viverra tortor euismod. Donec eget turpis nec ligula mollis finibus sit amet cursus nulla. Integer eget eros ante.

        Aenean mauris nisl, pharetra et aliquet ut, laoreet non eros. Nulla faucibus sollicitudin interdum. Phasellus et laoreet dui, sed rutrum lorem. Donec elementum sem et odio suscipit gravida. Proin et pharetra neque, nec pulvinar risus. Sed tristique tincidunt sapien at laoreet. Nullam non imperdiet urna. Ut venenatis turpis vel lorem vehicula vestibulum. Quisque convallis blandit fermentum. Fusce id enim ut augue venenatis molestie eu et velit. Proin a diam euismod, feugiat magna quis, cursus orci. Duis efficitur lacinia quam sit amet mollis. Nunc nec pellentesque ligula, ut interdum sapien. Curabitur a ex sit amet ligula congue pulvinar.

        Phasellus cursus aliquam laoreet. Fusce quis sem nec magna lobortis vestibulum vitae vitae dolor. Aliquam bibendum diam est, a tincidunt sapien laoreet et. Maecenas ultricies turpis libero, eu sagittis ex malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras varius eros ut est tincidunt auctor. Vivamus sit amet turpis luctus, porttitor quam et, scelerisque metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est ex, vestibulum non lectus et, elementum faucibus lectus. Donec accumsan id nunc quis malesuada. Duis tempor vitae libero et mattis. Integer vestibulum, neque a dapibus scelerisque, mauris justo vulputate odio, vel consequat odio dui hendrerit ipsum. Fusce malesuada, sem et sodales finibus, ipsum orci dignissim dui, quis dignissim ante quam sed tellus. Cras sit amet augue vel arcu finibus congue in vel metus.

        Sed ut leo blandit lacus viverra viverra. Praesent maximus sapien orci, sodales placerat dolor volutpat vitae. Integer pretium, nunc sed malesuada ultrices, leo turpis sollicitudin lacus, eget pretium purus nisi et ante. Donec fermentum consectetur iaculis. Donec varius ante in libero gravida, a tempor augue auctor. Quisque eu pretium elit. Aenean id tristique ipsum, quis interdum libero. In in aliquam purus, in fermentum augue. Etiam sagittis tempus sem ac cursus. Pellentesque velit ligula, ornare ac molestie a, aliquet eu elit. Ut sed fringilla leo.

        Ut at nulla lectus. Mauris et ante elit. Morbi tincidunt nulla vel mollis malesuada. Duis egestas, augue facilisis tempus scelerisque, nibh orci rhoncus nibh, non malesuada metus orci id libero. Praesent rutrum massa orci. Phasellus viverra, lectus id porta dictum, dui purus bibendum ante, ut elementum ante orci eget nisl. Pellentesque vel ullamcorper risus, non tempus magna. Nullam varius, dolor vitae scelerisque lobortis, risus massa blandit tellus, id euismod odio nunc in lacus. Phasellus eu tempor quam. Mauris tincidunt, justo quis imperdiet fringilla, ligula risus vehicula neque, ultrices malesuada elit ex ut dui. Ut aliquam tellus sed orci vehicula porta. Proin non ullamcorper arcu. Vestibulum dui metus, lacinia quis gravida lobortis, sodales eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur ipsum id felis auctor rutrum.

        Vivamus vehicula risus tellus, a placerat eros bibendum eget. Duis molestie dolor purus. Curabitur molestie diam id erat pharetra vehicula. Quisque consectetur risus non ullamcorper interdum. Integer nibh arcu, faucibus posuere nulla non, egestas vehicula ex. Sed et cursus libero. Cras ut pretium nunc, consequat egestas arcu.

        Mauris imperdiet pellentesque tellus quis dapibus. Maecenas posuere rhoncus dolor, vel rhoncus erat accumsan ac. Phasellus vitae diam iaculis, aliquam lorem eget, condimentum quam. Vivamus bibendum, eros eget dapibus vulputate, diam mauris imperdiet mi, quis elementum risus eros id dui. Aliquam erat volutpat. Nam vehicula massa quis orci vestibulum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        Etiam condimentum pellentesque felis, in ornare sem porttitor at. Etiam ante erat, euismod vitae diam sit amet, bibendum molestie lacus. Nam sit amet risus libero. Etiam sit amet lacinia sapien. Proin metus tellus, tincidunt at leo iaculis, maximus consectetur eros. In libero elit, consequat et massa non, mollis vehicula lacus. Aliquam erat volutpat.

        Nullam efficitur commodo euismod. Nunc non tortor ac velit ornare suscipit. Ut venenatis ullamcorper dolor, ut maximus nibh sollicitudin quis. Vivamus ac nulla sed ex feugiat cursus. In varius purus quis dictum blandit. Nam non cursus justo, vitae vehicula ligula. Sed ut eleifend sem, id mattis ligula. In eu fringilla nunc, vel congue risus. Mauris ultrices quis ipsum nec elementum. Vestibulum quis ex vitae ligula lobortis aliquam non at lorem. Integer iaculis ante a finibus gravida. Donec orci elit, blandit sed sollicitudin at, finibus id ipsum. Cras a risus blandit, pharetra ante vitae, finibus metus. Suspendisse iaculis vehicula fermentum. Nam consectetur blandit libero vitae consectetur.

        Donec tincidunt mi at ultricies malesuada. Integer euismod, metus quis lacinia luctus, mi risus lobortis purus, at tristique tortor dolor sed purus. Nulla a dolor mattis, laoreet tortor ac, mollis elit. Mauris a massa vitae nibh ultrices lacinia. Phasellus maximus mattis urna vel egestas. Morbi nec dolor vel eros accumsan ullamcorper non at neque. Suspendisse sagittis sit amet erat ut gravida. Suspendisse vitae ligula eget ligula feugiat ornare. Praesent sed bibendum lacus, quis gravida justo.

        Praesent nec congue lectus, eget laoreet mi. Sed et pharetra lorem, sed faucibus elit. Fusce elementum risus libero, ac rutrum nibh ultricies eu. Curabitur laoreet mauris orci, efficitur tincidunt nisi placerat ac. Duis non lectus rutrum, tincidunt magna sit amet, finibus dolor. Cras vel felis nec justo laoreet auctor a eget tellus. Sed porttitor massa nunc, ut dapibus urna cursus in. Praesent tristique convallis ipsum sit amet porta. Aliquam sed augue mauris. Quisque ultrices euismod nibh sed bibendum. Nam tincidunt bibendum ultricies. Nullam fermentum est non justo facilisis vulputate. Fusce fermentum egestas justo, id congue diam faucibus dictum. Integer non aliquet velit, vel aliquet mauris.

        Nunc sed ullamcorper magna. Sed facilisis urna velit, vitae pharetra diam mollis ut. Donec ac ipsum bibendum, pellentesque lorem eget, euismod metus. Pellentesque pharetra scelerisque consequat. Nullam condimentum efficitur quam id euismod. Sed commodo finibus urna, tincidunt sodales odio varius a. Sed ac molestie orci, ut pulvinar justo. Donec vehicula libero sit amet luctus commodo. Nulla vitae tincidunt erat, non mollis tortor. Etiam sollicitudin tellus lobortis tristique vulputate. Nunc quis massa feugiat, malesuada ante a, tincidunt lorem. Aenean non sapien urna. Nam fringilla elit nec justo pretium, vel congue nibh pharetra.
      </Wrapper>
    )
  }
}