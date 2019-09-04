import React from 'react';
import styled from 'styled-components';

interface CompanyInfo {
  name: string;
  country: string;
  location: string;
}

interface Props {
  name: string;
  image?: string;
  href?: string;
  target?: string;
  number?: number;
  rewardTotal?: string;
}

const PokemonItem: React.FC<Props> = (props) => {
  const { name, image, href, target = '_self', number, rewardTotal} = props;

  return (
    <Li>
      <A href={href} target={target}>
        <Header backgroundImage={image}>
        </Header>
        <Footer>
          <dl>
            <Title>{name}</Title>
            <CompanyInfo>
              {number}
              <br/>
              {/*<span> {companyInfo && companyInfo.country} </span>*/}
              {/*<Dot>.</Dot>*/}
              {/*<span> {companyInfo && companyInfo.location} </span>*/}
            </CompanyInfo>
          </dl>
          {/*<Reward>채용보상금 {rewardTotal}</Reward>*/}
        </Footer>
      </A>
    </Li>
  );
};

const Li = styled.li`
  width: 25%;
  padding: 10px;
  list-style: none;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 991px) and (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 767px){
    width: 50%;
  }
`;

const A = styled.a`
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
`;

const Header = styled.header<{backgroundImage?: string;}>`
  display: block;
  padding-bottom: 75%;
  position: relative;
  background-size: contain;
  background-position: 50%;
  border-radius: 4px;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  background-image: url(${props => props.backgroundImage});
`;

const LikeButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 3px;
  position: absolute;
  background: rgba(0,0,0,.3);
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  display: flex;
  right: 10px;
  top: 10px;
  flex-direction: row;
`;

const Footer = styled.footer`
  padding: 14px 10px;
  // height: 12.5em;
`;

const Title = styled.dt`
  position: relative;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  max-height: 2.8em;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CompanyInfo = styled.dd`
  margin-top: 8px;
  color: #999;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Dot = styled.span`
  margin: 0 3px;
  top: -4px;
  position: relative;
`;

const Reward = styled.div`
  margin-top: 10px;
  color: #666;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default PokemonItem;
