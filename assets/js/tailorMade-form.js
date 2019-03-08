	// $('.suitable_for').click(function () {
	// 	$('.suitable_for').not(this).prop('checked', false);
	// });

	$(function () {
	    $('#datetimepicker1').datepicker({
	        format: "dd/mm/yyyy",
	        language: "es",
	        autoclose: true,
	        todayHighlight: true
	    });
	});


	var input = document.querySelector("#phone");
	window.intlTelInput(input, {
	    utilsScript: "assets/js/utils.js",
	});

	let oneTimeFamily = 0;
	let oneTimeGroup = 0;


	$('.family').click(function () {
	    oneTimeGroup = 0;
	    $('#form-group').empty();

	    if (oneTimeFamily == 0) {
	        var html = `
					<div class="col-lg-12 col-sm-offset-1" adult>
					<div class="form-group">
						<label>Adults</label>
						<select class="form-control">
							<option disabled="" selected="">- adults -</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
					</div>
					</div>
					<div class="col-lg-12 col-sm-offset-1" >
					<div class="form-group">
						<label>Children under 12</label>
						<select class="form-control">
							<option disabled="" selected="">- under 12 -</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
					</div>
					</div>
					<div class="col-lg-12 col-sm-offset-1" style="margin-bottom: 20px;">
					<div class="form-group">
						<label>Children over 12</label>
						<select class="form-control">
							<option disabled="" selected="">- over 12 -</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
					</div>
					</div>
				`;

	        $('#form-family').append(html);
	        oneTimeFamily++;

	    }

	});

	$('.solo').click(function () {
	    oneTimeFamily = 0;
	    oneTimeGroup = 0;
	    $('#form-family').empty();
	    $('#form-group').empty();
	});
	$('.couple').click(function () {
	    oneTimeFamily = 0;
	    oneTimeGroup = 0;
	    $('#form-family').empty();
	    $('#form-group').empty();
	});
	$('.group').click(function () {
	    oneTimeFamily = 0;
	    $('#form-family').empty();

	    if (oneTimeGroup == 0) {
	        var html = `
					<div class="col-lg-12 col-sm-offset-1" adult>
					<div class="form-group">
						<label>Adults</label>
						<select class="form-control">
							<option disabled="" selected="">- adults -</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
					</div>
					</div>
				`;

	        $('#form-group').append(html);
	        oneTimeGroup++;

	    }

	});
