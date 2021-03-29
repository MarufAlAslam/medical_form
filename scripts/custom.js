$('.next1').click(function(){
    $('.gettingStarted').hide(100)
    $('.PatientDetails').show(100)
    $('.start').removeClass('fa-circle').addClass('fa-check')
    $('.ppText').show()
    $('.progreess').html("13")
    $('.progress-bar').addClass('w-13')
})

$('.next2').click(function(){
    $('.PatientDetails').hide(100)
    $('.petDetails').show(100)
    $('.patient').removeClass('fa-circle').addClass('fa-check')
    $('.progreess').html("30")
    $('.progress-bar').addClass('w-30')
})

$('.next3').click(function(){
    $('.petDetails').hide(100)
    $('.Feeling').show(100)
    $('.pet').removeClass('fa-circle').addClass('fa-check')
    $('.progreess').html("46")
    $('.progress-bar').addClass('w-46')
})

$('.next4').click(function(){
    $('.Feeling').hide(100)
    $('.behavior').show(100)
    $('.feeling').removeClass('fa-circle').addClass('fa-check')
    $('.progreess').html("60")
    $('.progress-bar').addClass('w-60')
})

$('.next5').click(function(){
    $('.behavior').hide(100)
    $('.symptoms').show(100)
    $('.behaviorr').show()
    $('.progreess').html("78")
    $('.progress-bar').addClass('w-78')
})

$('.next6').click(function(){
    $('.symptoms').hide(100)
    $('.extra').show(100)
    // $('.behaviorr').show()
    $('.symptomss').show()
    $('.progreess').html("90")
    $('.progress-bar').addClass('w-90')
})

$('.next7').click(function(){
    $('.progreess').html("100")
    $('.progress-bar').addClass('w-100')
})