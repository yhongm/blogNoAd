(function Elem(ROOT){
	function Elem(select){
		
		this.elem=(typeof(select) ==='string')?document.querySelector(select):select
	}
	Elem.prototype.exist=function(){
		if(this.elem!=null){
			return this.elem
		}else{
			return false
		}
		
	}
	Elem.prototype.hide=function(){
		if(this.elem){
			this.elem.hidden=true
			this.elem.style.display='none'
		}
	}
	Elem.prototype.click=function(){
		if(this.elem){
			this.elem.click()
		}
	}
	Elem.prototype.getStyle=function(){
		if(this.elem){
		   return this.elem.style
		}
		return null
	}
	ROOT.Elem=Elem
})(window)



window.onload=function(){
	console.log("页面加载完成")
	if(window.location.href.indexOf('csdn')>0){
		//csdn页面
		let toolbar=new Elem('#csdn-toolbar')
		if(toolbar.exist()){
			toolbar.hide()
		}
		let recommend=new Elem('.recommend-box')
		if(recommend.exist()){
			recommend.hide()
		}
		let aside=new Elem('aside')
		if(aside.exist()){
			aside.hide()
		}
		let readMore=new Elem('#btn-readmore')
		if(readMore.exist()){
			//点击更多 模拟点击更多
			readMore.click()
		}
		let footAd=new Elem('.pulllog-box')
	    if(footAd.exist()){
			footAd.hide()
		}
		let passportbox=new Elem('#passportbox')
		if(passportbox.exist()){
			passportbox.hide()
		}
		let content=new Elem('.blog-content-box')
		content.getStyle().left=`-${content.elem.offsetLeft}px`
		content.getStyle().width=`${document.body.offsetWidth}px`
		let goToBox=new Elem('.meau-gotop-box')
		if(goToBox.exist()){
			goToBox.hide()
		}
		let mediaAd=new Elem('.mediav_ad')
		if(mediaAd.exist()){
			mediaAd.hide()
		}

	}else{
		let bottom=new Elem('.note-bottom')
		if(bottom.exist()){
			bottom.hide()
		}
		let ad=new Elem('#note-fixed-ad-container')
        if(ad.exist()){
			ad.hide()
		}
		let toolbar=new Elem('.width-limit')
		if(toolbar.exist()){
			toolbar.hide()
		}
		
       
	}
	
}






