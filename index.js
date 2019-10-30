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
	Elem.prototype.offsetLeftWidth=function(){
		if(this.elem){
			return this.elem.offsetWidth+this.elem.offsetLeft
		}
	}
	ROOT.Elem=Elem
})(window)


navigator.__defineGetter__("userAgent",function(){return "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"});
window.onload=function(){


	console.log("页面加载完成")
	
	this.console.log("userAgent:"+navigator.userAgent)
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
		let asideOffsetWidth=aside.offsetLeftWidth()
		if(aside.exist()){
			aside.hide()
		}
		let readMore=new Elem('.btn-readmore')
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
		if(asideOffsetWidth){
			content.getStyle().left=`-${asideOffsetWidth}px`
		}
		
		content.getStyle().width=`${document.body.offsetWidth}px`
		let goToBox=new Elem('.meau-gotop-box')
		if(goToBox.exist()){
			goToBox.hide()
		}
		let mediaAd=new Elem('.mediav_ad')
		if(mediaAd.exist()){
			mediaAd.hide()
		}
		let menulist=new Elem('.meau-list')
		if(menulist.exist()){
			menulist.hide()
		}
		let commentBox=new Elem('.comment-box')
		if(commentBox.exist()){
			commentBox.hide()
		}
		let sideToolBar=new Elem('.csdn-side-toolbar')
		if(sideToolBar.exist()){
			sideToolBar.hide()
		}
		let rewardBox=new Elem('.reward-user-box')
		if(rewardBox.exist()){
			rewardBox.hide()
		}
		let ad58=new Elem('#dmp_ad_58')
		if(ad58.exist()){
		   ad58.hide()
		}
		let templateBox=new Elem('.template-box')
		if(templateBox.exist()){
			templateBox.hide()
		}

		document.querySelector('main').removeChild(document.querySelector('.recommend-box'))
		

	}else{
		let bottom=new Elem('._2xr8G8')
		if(bottom.exist()){
			bottom.hide()
		}
		let ad=new Elem('._2OwGUo')
        if(ad.exist()){
			ad.hide()
		}
		let toolbar=new Elem('._1CSgtu')
		if(toolbar.exist()){
			toolbar.hide()
		}
		let comment=new Elem('#note-page-comment')
		if(comment.exist()){
			comment.hide()
		}
		let zan=new Elem('._3W59v5')
		if(zan.exist()){
			zan.hide()
		}
		let footad=new Elem('._22bNOL')
		if(footad.exist()){
			footad.hide()
		}
		
       
	}
	
}






