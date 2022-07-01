class apiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // 1) Filtrando por nombre de propiedad y valor exacto. /publicationtest?price=25000 ==> publicaciones que sean de price = 25000
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2) Filtrado Avanzado por nombre de propiedad usando gte >= | gt > | lte <= | lt <. /publicationtest?price[gte]=25000 ==> publicaciones que sean de price >= 25000

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    //3) Ordenamiento
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort('-visibility ' + sortBy);
    } else {
      this.query = this.query.sort('-visibility');
    }

    return this;
  }

  limit() {
    // 4) Limitando los campos mostrados
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    // 5) Pagination
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = apiFeatures;

//   if (req.query.page) {
//     const numPub = await PublicationTest.countDocuments();
//     if (skip >= numPub)
//       return next(new AppError('There are no publications on this page', 404));
//   }
