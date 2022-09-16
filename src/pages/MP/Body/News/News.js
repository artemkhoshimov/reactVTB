import React from "react";


const News = (props) =>{
    return (
        <div
        style={{
          backgroundColor: 'var(--dl-color-neutral-neutral00)',
          width: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '20px',
          marginRight: '0',
          marginBottom: '0',
          flexShrink: '0',
          boxSizing: 'border-box',
          borderRadius: '20px',
          borderColor: 'transparent',
          position: 'absolute',
          top: '228px',
          left: '54px',
          boxShadow: '0px 16px 24px 0px rgba(0, 0, 0, 0.05999999865889549) ',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '0',
            marginBottom: '20px',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            borderRadius: '0px 0px 0px 0px',
            borderColor: 'transparent',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              marginRight: '0',
              marginBottom: '0',
              alignSelf: 'stretch',
              boxSizing: 'border-box',
              borderRadius: '0px 0px 0px 0px',
              borderColor: 'transparent',
              position: 'relative',
            }}
          >
            <span
              style={{
                color: 'var(--dl-color-neutral-neutral90)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: '24px',
                marginRight: '0',
                marginBottom: '0',
                alignSelf: 'auto',
                position: 'absolute',
                top: 1,
                fontWeight: '800',
              }}
            >
              <span>Популярные новости</span>
            </span>
            <button
              style={{
                width: '136px',
                display: 'flex',
                alignItems: 'center',
                marginRight: '0',
                marginBottom: '0',
                boxSizing: 'border-box',
                borderRadius: '0px 0px 0px 0px',
                borderColor: 'transparent',
                position: 'absolute',
                top: '0px',
                left: '544px',
              }}
            >
              <span
                style={{
                  color: 'var(--dl-color-neutral-neutral50)',
                  height: 'auto',
                  textAlign: 'left',
                  lineHeight: '24px',
                  marginRight: '8px',
                  marginBottom: '0',
                  alignSelf: 'auto',
                }}
              >
                <span>Смотреть все</span>
              </span>
              <img
                src="/playground_assets2/arrowschevronrighti135-c4sl.svg"
                alt="ArrowsChevronRightI135"
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '0',
                  marginBottom: '0',
                  boxSizing: 'border-box',
                  position: 'relative',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    )
}

export default News