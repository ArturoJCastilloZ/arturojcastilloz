import '../../styles/components/hero/hero.scss'
import { Content } from './content/content'
import { UlSocial } from './ul_social/ul_social'
import { LiSocial } from './li_social/li_social'
import { Resume } from '../resume/resume'

const Hero = ({ hero, social, docs }) => {
    return (
        <div className='hero' id='home'>
            {hero.map((dataHero, index) => {
                return (
                    <Content
                        key={index}
                        greeting={dataHero.Saludo}
                        author={dataHero.Presentacion}
                        presentation={dataHero.Puesto}
                        mun={dataHero.Municipio}
                        cdest={dataHero.Ciudad}>
                        <UlSocial>
                            {social.map((dataSocial, index) => {
                                return (
                                    <LiSocial
                                        key={index}
                                        title={dataSocial.Titulo}
                                        icon={dataSocial.Icono}
                                        url={dataSocial.Url}
                                        color={dataSocial.Color}
                                    />
                                )
                            })}
                            <Resume />
                        </UlSocial>
                    </Content>
                )
            })}
        </div>
    )
}

export { Hero }
